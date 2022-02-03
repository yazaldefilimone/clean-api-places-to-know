import { PlaceDTO } from "@/data/contracts/dtos";

export interface IfindAllPlaceRepository {
  All: () => Promise<PlaceDTO[]>;
}

