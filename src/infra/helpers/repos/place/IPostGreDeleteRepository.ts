import { PlaceDTO } from "@/data/contracts/dtos";

export interface IPostGreDeleteRepository{
  deletePlace:({ id }:PlaceDTO) => Promise<void>
}
