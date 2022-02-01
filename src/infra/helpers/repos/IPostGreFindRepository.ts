import { UserDTO } from "@/data/contracts/dtos";

export interface IPostGreFindRepository{
  findOne:(email:string) => Promise<undefined | UserDTO>
}
