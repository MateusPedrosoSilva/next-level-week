import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/habits/drink", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: { startsWith: "drink" },
    },
  });
  return habits;
});

app.get("/habits/all", async () => {
  const habits = await prisma.habit.findMany();
  return habits;
});

app.listen({ port: 7070 }, () => {
  console.log("server running 🚀");
});
