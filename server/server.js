const fs = require("fs");
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
  const markdown = await reply.markdown(
    path.join(__dirname, "..", `/markdown/lessons/${id}.md`)
  );

  // let num = foobar();

  let script, link;

  // Check for static files
  let jsPath = path.join(__dirname, "..", `/public/lessons/js/${id}.js`);
  let cssPath = path.join(__dirname, "..", `/public/lessons/css/${id}.css`);

  if (fs.existsSync(jsPath)) {
    script = `/lessons/js/${id}.js`;
  }

  if (fs.existsSync(cssPath)) {
    link = `/lessons/css/${id}.css`;
  }

  reply.view(`/templates/index.pug`, {
    markdown,
    script,
    link,
  });
});

// function foobar() {
//   let num = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     num = i;
//   }

//   return num;
// }

// Exercises
fastify.get("/exercises", async (request, reply) => {
  reply.view("/templates/exercises.pug");
});

fastify.get("/exercise/:exerciseId", async (request, reply) => {
  const id = request.params.exerciseId;
  const markdown = await reply.markdown(
    path.join(__dirname, "..", `/markdown/exercises/${id}.md`)
  );

  let script, link;

  // Check for static files
  let jsPath = path.join(__dirname, "..", `/public/exercises/js/${id}.js`);
  let cssPath = path.join(__dirname, "..", `/public/exercises/css/${id}.css`);

  if (fs.existsSync(jsPath)) {
    script = `/exercises/js/${id}.js`;
  }

  if (fs.existsSync(cssPath)) {
    link = `/exercises/css/${id}.css`;
  }

  reply.view(`/templates/index.pug`, {
    markdown,
    script,
    link,
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
