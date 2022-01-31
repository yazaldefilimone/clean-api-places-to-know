import { UserDTO } from "@/data/contracts/dtos";

export interface IAddUserRepository {
  add: (dataReceivedOfUser:UserDTO) => Promise<UserDTO>;
}
