import { PlaceDTO } from "@/data/contracts/dtos";
type props = {
  place:string
}
export interface IPostGreFindRepository{
  findOne:({ place }: props) => Promise<undefined | PlaceDTO>
}
