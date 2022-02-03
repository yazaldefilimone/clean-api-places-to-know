import { PlaceDTO } from "@/data/contracts/dtos";

export interface IPostGreAddRepository{
  add:(data:PlaceDTO) => Promise<PlaceDTO>
}
