import { SignUpController } from "../application/controllers/SignUpController";
import { makeSignUpUsecase } from "./makeSignUpUseCase";

export function makeSignUpController() {
  const signUpUseCase = makeSignUpUsecase();
  return new SignUpController(signUpUseCase);
}
