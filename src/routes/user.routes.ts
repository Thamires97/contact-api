import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { IUserCreate } from "../interfaces/user.interface";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();
  fastify.post<{ Body: IUserCreate }>("/", async (request, reply) => {
    const { name, email } = request.body;
    try {
      const data = await userUseCase.create({ name, email });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get("/", async (request, reply) => {
    reply.send({ hello: "world" });
  });
}
