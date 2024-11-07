import { AccountAlreadyExists } from "../errors/accountAlreadyExists";
import { prismaClient } from "../libs/prismaClient";

interface IInput {
  name: string;
  email: string;
  password: string;
}

type IOutput = void;
// funcionalidade
export class SignUpUseCase {
  // metodo para executar a funcionalidade
  async execute({ email, name, password }: IInput): Promise<IOutput> {
    const accountAlreadyExists = await prismaClient.account.findUnique({
      where: {
        email,
      },
    });

    if (accountAlreadyExists) {
      throw new AccountAlreadyExists();
    }

    await prismaClient.account.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
}
