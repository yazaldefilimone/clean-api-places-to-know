import {  UserDTO } from "../../../src/data/contracts/dtos";
import { IfindByEmailUserRepository } from "../../../src/data/contracts/repos";
import { Either, right, left } from "../../../src/shared/error-handler/either";


export class FindByEmailUserRepository implements IfindByEmailUserRepository{
  constructor(private readonly postGreRepository:IPostGreRepository){}

  async findById(id:string):Promise<Either<null | undefined, UserDTO>>{
    const resultOrNull = await this.postGreRepository.findOne(id);

    if(!resultOrNull){
      return left(undefined);
    }

    return right(resultOrNull as UserDTO)
  }
}
