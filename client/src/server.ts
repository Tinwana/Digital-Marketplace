import express from "express";
import { getPayLoadClient } from "./git-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express();
const port = Number(process.env.PORT) ?? 3001;

const start = async () => {
  const payload = await getPayLoadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin ULR ${cms.getAdminURL()}`);
      },
    },
  });
  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info("Next.js start");
  });
  app.listen(port, async () => {
    payload.logger.info(
      `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
    );
  });
};
start();
