import next from "next";

const port = Number(process.env.PORT) || 3000;

const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  port,
});
const nextHandler = nextApp.getRequestHandler();

export { nextApp, nextHandler };
