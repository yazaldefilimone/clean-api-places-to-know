import { Place } from "@/domain/entities";
import { NotFound } from "@/domain/erros"

export interface IDeletePlaceUseCase{
  execute:({ id }:Place) => Promise<void | NotFound>
}
