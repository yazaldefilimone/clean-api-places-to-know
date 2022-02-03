import { PlaceDTO } from "@/data/contracts/dtos";
import { Either } from "@/shared/error-handler/either";

export interface IfindByIdPlaceRepository {
  findByIdPlace: ({ id }:IfindByIdPlaceRepository.Input) => Promise<Either<undefined,PlaceDTO>>;
}


export namespace IfindByIdPlaceRepository{
  export type Input = {
    id:string
  }
}
