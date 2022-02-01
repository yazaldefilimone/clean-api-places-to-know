import {  UserDTO } from "@/data/contracts/dtos";
import { IAddUserRepository } from "@/data/contracts/repos";
import {IPostGreAddRepository} from "@/infra/helpers/repos";


export class AddUserRepository implements IAddUserRepository{
  constructor(private readonly postGreRepository:IPostGreAddRepository){}

  async add(data:UserDTO):Promise<UserDTO>{
    const resultOrNull = await this.postGreRepository.add(data);

    return resultOrNull
  }
}
