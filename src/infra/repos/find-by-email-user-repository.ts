import {  UserDTO } from "@/data/contracts/dtos";
import { IfindByEmailUserRepository } from "@/data/contracts/repos";
import { Either, right, left } from "@/shared/error-handler/either";
import { IPostGreFindRepository } from "@/infra/helpers/repos";


export class FindByEmailUserRepository implements IfindByEmailUserRepository{
  constructor(private readonly postGreRepository:IPostGreFindRepository){}

  async findByEmail({ email }: IfindByEmailUserRepository.Input):Promise<Either<null | undefined, UserDTO>>{
    
    const resultOrNull = await this.postGreRepository.findOne({ email });

    if(!resultOrNull){
      return left(undefined);
    }

    return right(resultOrNull as UserDTO)
  }
}
