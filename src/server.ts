import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.listen({ port: 3000 }, () => {
  console.log(`Server is running on http://localhost:3000`);
});
