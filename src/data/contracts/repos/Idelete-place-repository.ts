import { PlaceDTO } from "@/data/contracts/dtos";

export interface IDeletePlaceRepository {
  deletePlace: ({ id }: PlaceDTO) => Promise<void>;
}
