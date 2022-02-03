import { UserDTO } from "@/data/contracts/dtos";
import { Either } from "@/shared/error-handler/either";

export interface IfindByEmailUserRepository {
  findByEmail: ({ email }:IfindByEmailUserRepository.Input) => Promise<Either<undefined | null , UserDTO>>;
}

export namespace IfindByEmailUserRepository{
  export type Input = {
    email:string
  }
}
