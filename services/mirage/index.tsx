import { createServer, Factory, Model } from "miragejs";
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
      server.createList("costumer", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/costumers");
      this.post("/costumers");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
