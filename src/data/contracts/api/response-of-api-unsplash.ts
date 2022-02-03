import { NotFound } from "@/domain/erros"
import { Either } from "@/shared/error-handler/either"

export interface ResponseOfApiUnsplash{
  get: (Input:ResponseOfApiUnsplash.Input) => Promise<Either<NotFound, string>>
}

export namespace ResponseOfApiUnsplash{
  export type Input = {
    name:string
  }
  
}
