import { PlaceDTO } from "@/data/contracts/dtos";

export interface IAddPlaceRepository {
  add: (dataReceivedOfPlace:PlaceDTO) => Promise<PlaceDTO>;
}
