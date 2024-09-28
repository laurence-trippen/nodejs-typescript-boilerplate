import Fastify from "fastify";


type User = {
  name: string;
  age: number;
};

async function main() {
  const fastify = Fastify({
    logger: true,
  });

  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })

  const user: User = {
    age: 24,
    name: "Laurence",
  };

  console.log("Hello TypeScript 2!", user);
}

main().catch(err => console.error());
