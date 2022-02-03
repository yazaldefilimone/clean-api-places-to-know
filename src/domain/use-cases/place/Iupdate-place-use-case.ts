import { Either } from "@/shared/error-handler/either"
import { Place } from "@/domain/entities";
import { NotFound } from "@/domain/erros";


export interface IUpdatePlaceUseCase{
  execute:(infoDataPlace:Place) => Promise<Either<NotFound ,Place>>
}
