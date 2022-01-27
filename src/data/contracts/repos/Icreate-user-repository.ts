import { UserDTO } from "@/data/contracts/dtos"
export interface IcreateUserRepository {
  add: (dataReceivedOfUser:UserDTO) => Promise<UserDTO>;
  findById: (id:string) => Promise<UserDTO | any>;
}
