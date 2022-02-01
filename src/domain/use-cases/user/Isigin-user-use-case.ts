import { Either } from "@/shared/error-handler/either";
import { TokenOfUser, User } from "@/domain/entities";
import { NotFound } from "@/domain/erros";


export interface ISigInUserUseCase{
  execute:({ email, password }:User) => Promise<Either<NotFound ,TokenOfUser>>
}
