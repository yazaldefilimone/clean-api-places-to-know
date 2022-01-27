import { User } from "@/domain/entities";

export interface ICreateUserUseCase{
  execute:(dataReceivedParamsOfUser:User) => Promise<User>
}
