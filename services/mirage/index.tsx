import { createServer, Factory, Model, Response } from "miragejs";
import { faker } from "@faker-js/faker";

type Costumer = {
  name: string;
  email: string;
  purchase_date: Date;
  purchase_amount: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      costumer: Model.extend<Partial<Costumer>>({}),
    },

    factories: {
      costumer: Factory.extend({
        name() {
          return faker.name.fullName();
        },
        email() {
          return faker.internet.email();
        },
        purchaseDate() {
          return faker.date.recent(30);
        },
        purchaseAmount() {
          return faker.finance.amount(49, 100, 2, "R$ ", true);
        },
      }),
    },

    seeds(server) {
      server.createList("costumer", 100);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/costumers/", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("costumer").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const costumers = this.serialize(
          schema.all("costumer")
        ).costumers.slice(pageStart, pageEnd);

        return new Response(
          200,
          { "x-total-count": String(total) },
          { costumers }
        );
      });
      this.post("/costumers");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
