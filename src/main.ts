import Fastify from "fastify";
import Config, { Player } from "./Config.js";

type User = {
  name: string;
  age: number;
};

async function main() {
  const fastify = Fastify({
    logger: true,
  });

  // Declare a route
  fastify.get("/", function (request, reply) {
    reply.send({ hello: "world" });
  });

  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    // Server is now listening on ${address}
  });

  const config: Config = {
    name: "asdasd",
    version: "1.2.0",
  };

  const player1 = new Player();
  console.log(player1.health);
  player1.damage(10);
  console.log(player1.health);

  console.log(config);

  const user: User = {
    age: 24,
    name: "Laurence",
  };

  console.log("Hello TypeScript 2!", user);
}

main().catch((err) => console.error(err));
