import { UserDTO } from "@/data/contracts/dtos";
type prop = {
  email:string
}
export interface IPostGreFindRepository{
  findOne:({ email }:prop ) => Promise<undefined | UserDTO>
}
