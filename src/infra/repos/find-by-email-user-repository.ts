import {  UserDTO } from "@/data/contracts/dtos";
import { IfindByEmailUserRepository } from "@/data/contracts/repos";
import { Either, right, left } from "@/shared/error-handler/either";
import {IPostGreFindRepository} from "@/infra/helpers/repos";


export class FindByEmailUserRepository implements IfindByEmailUserRepository{
  constructor(private readonly postGreRepository:IPostGreFindRepository){}

  async findById(id:string):Promise<Either<null | undefined, UserDTO>>{
    const resultOrNull = await this.postGreRepository.findOne(id);

    if(!resultOrNull){
      return left(undefined);
    }

    return right(resultOrNull as UserDTO)
  }
}
