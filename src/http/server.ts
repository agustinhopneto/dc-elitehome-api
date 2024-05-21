import fastify from "fastify";

const APP_PORT = 4000;

const app = fastify()

app.listen({
  host: '0.0.0.0',
  port: 4000
}).then(() => {
  console.log(`🚀 HTTP Server is running at ${APP_PORT}!`)
})