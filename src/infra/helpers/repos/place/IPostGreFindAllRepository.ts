import { PlaceDTO } from "@/data/contracts/dtos";

export interface IPostGreFindAllRepository{
  All:() => Promise<PlaceDTO[]>
}
