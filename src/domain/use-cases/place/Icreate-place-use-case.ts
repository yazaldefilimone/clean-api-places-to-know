import { Either } from "@/shared/error-handler/either"
import { Place } from "@/domain/entities";
import { AlreadyExistsError, NotFound } from "@/domain/erros";


export interface ICreatePlaceUseCase{
  execute:(infoDataPlace:Place) => Promise<Either<AlreadyExistsError  | NotFound ,Place>>
}
