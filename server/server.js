const path = require("path");
const fastify = require("fastify")({ logger: true });

fastify.register(require("point-of-view"), {
  engine: {
    pug: require("pug"),
  },
});

fastify.register(require("fastify-markdown"), { src: true });

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "../public"),
});

// Main Route
fastify.get("/", async (request, reply) => {
  const md = await reply.markdown(
    path.join(__dirname, "..", "/markdown/index.md")
  );
  reply.view("/templates/index.pug", {
    markdown: md,
  });
});

// Lessons
fastify.get("/lessons", async (request, reply) => {
  reply.view("/templates/lessons.pug");
});

fastify.get("/lesson/:lessonId", async (request, reply) => {
  const id = request.params.lessonId;
  const md = await reply.markdown(
    path.join(__dirname, "..", `/markdown/lessons/${id}.md`)
  );
  reply.view(`/templates/index.pug`, {
    markdown: md,
  });
});

// Exercises
fastify.get("/exercises", async (request, reply) => {
  reply.view("/templates/exercises.pug");
});

fastify.get("/exercise/:exerciseId", async (request, reply) => {
  const id = request.params.exerciseId;
  const md = await reply.markdown(
    path.join(__dirname, "..", `/markdown/exercises/${id}.md`)
  );
  reply.view(`/templates/index.pug`, {
    markdown: md,
  });
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
