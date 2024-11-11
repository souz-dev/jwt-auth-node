// import { z } from "zod";
import { LeadError } from "../errors/LeadsError";
import { IController, IRequest, IResponse } from "../interfaces/IController";
import { IListLeadsUseCase } from "../useCases/ListLeadsUseCase";

export class ListLeadsController implements IController {
  constructor(private listLeadsUseCase: IListLeadsUseCase) {}

  async handle(request: IRequest): Promise<IResponse> {
    console.log(request);
    try {
      const leads = await this.listLeadsUseCase.execute();

      return {
        statusCode: 200,
        body: { leads },
      };
    } catch (error) {
      if (error instanceof LeadError) {
        return {
          statusCode: error.statusCode,
          body: { error: error.message, details: error.details },
        };
      }

      throw error;
    }
  }
}
