import { Either } from "@/shared/error-handler/either"
import { Place } from "@/domain/entities";
import {NotFound } from "@/domain/erros";


export interface IfindOnePlaceUseCase{
  execute:({ name, id }: Place | any) => Promise<Either<NotFound ,Place>>
}
