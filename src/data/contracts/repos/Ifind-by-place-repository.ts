import { PlaceDTO } from "@/data/contracts/dtos";
import { Either } from "@/shared/error-handler/either";

export interface IfindByPlaceRepository {
  findByPlace: ({ name }:IfindByPlaceRepository.Input) => Promise<Either<undefined, PlaceDTO>>;
}


export namespace IfindByPlaceRepository{
  export type Input = {
    name:string
  }
}
