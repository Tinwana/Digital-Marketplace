import express from "express";
import { getPayLoadClient } from "./git-payload";
import { nextHandler } from "./next-utils";

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
  app.use();
};
start();
