import express from "express";
import { makeSignUpController } from "../factories/makeSignUpController";
import { makeSignInController } from "../factories/makeSignInController";
import { routeAdapters } from "./adapters/routeAdapters";

const app = express();

app.use(express.json());

app.post("/sign-up", routeAdapters(makeSignUpController()));
app.post("/sign-in", routeAdapters(makeSignInController()));

app.listen(3001, () => {
  console.log("Server started ");
});
