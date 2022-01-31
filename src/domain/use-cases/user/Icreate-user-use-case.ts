import { Either } from "@/shared/error-handler/either"
import { User } from "@/domain/entities";
import { AlreadyExistsError } from "@/domain/erros";


export interface ICreateUserUseCase{
  execute:(dataReceivedParamsOfUser:User) => Promise<Either<AlreadyExistsError ,User>>
}
