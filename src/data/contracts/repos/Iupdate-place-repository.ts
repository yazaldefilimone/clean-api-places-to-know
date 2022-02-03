import { PlaceDTO } from "@/data/contracts/dtos";

export interface IUpdatePlaceRepository {
  update:(data:PlaceDTO) => Promise<void>;
}
