export interface IRequest {
  headers: Record<string, string>;
}

export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IData {
  data: Record<string, any>;
}

export type MiddlewareResult = IResponse | IData;

export interface IMiddleware {
  handle(request: IRequest): Promise<MiddlewareResult>;
}
