# Dashboard Project

Este é um projeto pesssoal desenvolvido para integrar portfolio, o qual simula o painel administrativo de um *e-commerce*.

Na página principal são apresentados gráficos e estatísticas. Além disso, a aplicação conta com outras duas páginas onde pode-se visualizar as compras realizadas e são listados os produtos.

O projeto conta também com autenticação de usuário. No momento do login um token é armazenado nos cookies.  
As páginas do projeto só podem ser acessadas com o uso de um token válido.
Por meio da função **getServerSideProps**, essa verificação é realizada no servidor que redireciona o usuário para o signin em caso de falha.

As chamadas à API são realizadas com o **React Query**, que faz o *fetching* dos dados e os armazena em cache, evitando chamadas desnecessárias.

## Tecnologias utilizadas

- Typescript
- NextJS
- Chakra-UI
- Axios
- React-query
- Apex-charts

## Layout mobile

![Captura de tela de 2022-10-17 18-51-25](https://user-images.githubusercontent.com/91793932/196290707-eee77367-8d9c-40cb-8696-12d5528b75e8.png)
![Captura de tela de 2022-10-17 18-54-02](https://user-images.githubusercontent.com/91793932/196291097-cf2554c2-5aa8-4703-814e-c0ae6f46bee3.png)
![Captura de tela de 2022-10-17 18-54-55](https://user-images.githubusercontent.com/91793932/196291221-9cd6ae4f-bb3a-4466-a58e-7b4bec8147ec.png)
![Captura de tela de 2022-10-17 18-55-30](https://user-images.githubusercontent.com/91793932/196291301-fc031612-2eec-4db2-a67e-cd040259ffee.png)

## Layout web

![Captura de tela de 2022-10-17 18-57-02](https://user-images.githubusercontent.com/91793932/196291527-a3437639-fe69-4751-afd1-083274640d2f.png)
![Captura de tela de 2022-10-17 18-57-31](https://user-images.githubusercontent.com/91793932/196291585-fd464d06-ebfa-4584-ae9f-0bade332976b.png)

## Deploy

- [Dashboard](https://dashboard-rafaelc77.vercel.app/dashboard)

## Como executar o projeto

```
# clonar o repositório

$ git clone https://github.com/RafaelC77/portfolio-dashboard.git

# acessar a pasta do projeto 
cd portfolio-dashboard

# instalar as dependências
yarn

# executar o projeto
yarn dev

# login

 usuário: kminchelle
 senha: 0lelplR
 
 ou utilizar qualquer usuário da seguinte API: https://dummyjson.com/docs/users

```

## Licença

Projeto sob [licença](https://github.com/RafaelC77/portfolio-dashboard/blob/main/LICENSE) MIT.
