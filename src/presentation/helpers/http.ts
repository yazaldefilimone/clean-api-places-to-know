import { ForbiddenError, ServerError, UnauthorizedError } from '@/presentation/errors'
import { HttpResponse } from "@/presentation/contracts/dtos/http";

export const ok = <T = any> (data: T): HttpResponse<T> => ({
  statusCode: 200,
  data
})

export const badRequest = (error: any): HttpResponse<any> => ({
  statusCode: 400,
  data:{ "message": error instanceof Error ? error.message : error }
})

export const unauthorized = (): HttpResponse<any> => ({
  statusCode: 401,
  data:{ "message":  new UnauthorizedError() }
})

export const forbidden = (): HttpResponse<any> => ({
  statusCode: 403,
  data: { "message": new ForbiddenError() }
})

export const serverError = (error: unknown): HttpResponse<any> => ({
  statusCode: 500,
  data:{ "message" : new ServerError(undefined).message }
})
