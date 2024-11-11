import express from "express";

import { routeAdapters } from "./adapters/routeAdapters";

import { makeSignUpController } from "../factories/makeSignUpController";
import { makeSignInController } from "../factories/makeSignInController";
import { makeListLeadsController } from "../factories/makeListLeadsController";
import { middlewareAdapter } from "./adapters/middlewareAdapter";
import { makeAuthenticationMiddleware } from "../factories/makeAuthenticationMiddleware";

const app = express();

app.use(express.json());

app.post("/sign-up", routeAdapters(makeSignUpController()));
app.post("/sign-in", routeAdapters(makeSignInController()));

app.get(
  "/leads",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapters(makeListLeadsController())
);
app.listen(3001, () => {
  console.log("Server started ");
});
