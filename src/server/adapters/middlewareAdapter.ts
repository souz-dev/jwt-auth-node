import { NextFunction, Request, Response } from "express";
import {
  IMiddleware,
  MiddlewareResult,
} from "../../application/interfaces/IMiddleware";

export function middlewareAdapter(middleware: IMiddleware) {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result: MiddlewareResult = await middleware.handle({
        headers: request.headers as Record<string, string>,
      });

      if ("statusCode" in result) {
        response.status(result.statusCode).json(result.body);
        return;
      }

      if ("data" in result) {
        request.metadata = {
          ...request.metadata,
          ...result.data,
        };
        next();
        return;
      }

      // Se chegou aqui, algo está errado com o tipo retornado
      throw new Error("Middleware returned an invalid result");
    } catch (error) {
      next(error);
    }
  };
}
