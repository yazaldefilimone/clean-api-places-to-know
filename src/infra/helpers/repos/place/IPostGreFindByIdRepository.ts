import { PlaceDTO } from "@/data/contracts/dtos";

export interface IPostGreFindByIdRepository{
  findById:({ id }:PlaceDTO | any ) => Promise<PlaceDTO>
}
