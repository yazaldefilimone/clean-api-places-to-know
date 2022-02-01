import { UserDTO } from "@/data/contracts/dtos";

export interface IPostGreAddRepository{
  add:(data:UserDTO) => Promise<UserDTO>
}
