export class LeadError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public details?: any
  ) {
    super(message);
    this.name = "LeadError";
    Object.setPrototypeOf(this, LeadError.prototype);
  }

  static notFound(message: string = "Lead não encontrado"): LeadError {
    return new LeadError(message, 404);
  }

  static badRequest(message: string, details?: any): LeadError {
    return new LeadError(message, 400, details);
  }

  static internal(message: string = "Erro interno do servidor"): LeadError {
    return new LeadError(message, 500);
  }
}
