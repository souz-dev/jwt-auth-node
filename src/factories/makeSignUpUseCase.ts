import { SignUpUseCase } from "../application/useCases/SignUpUseCase";

export function makeSignUpUsecase() {
  const SALT = 10;
  return new SignUpUseCase(SALT);
}
