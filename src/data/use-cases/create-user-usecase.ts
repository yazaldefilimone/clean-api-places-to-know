import { UserDTO } from "@/data/contracts/dtos";
import { IAddUserRepository, IfindByEmailUserRepository } from "@/data/contracts/repos";
import { Either, right, left } from "@/shared/error-handler/either";
import { ICreateUserUseCase } from "@/domain/use-cases/user";
import { AlreadyExistsError } from "@/domain/erros";

import { ICreateHash } from "@/data/contracts/sacurity";



export class CreateUserUseCase implements ICreateUserUseCase{
//  name:string = ''
  //email:string = '';
  
  constructor(
    private readonly addUserRepository:IAddUserRepository,
    private readonly createHash:ICreateHash,
    private readonly findByEmailUserRepository:IfindByEmailUserRepository
  ){}

  async execute(infoDataUser:UserDTO):Promise<Either<AlreadyExistsError, UserDTO>>{
  //  this.name = infoDataUser.name
    //this.email = infoDataUser.email
    const { email, password }  = infoDataUser;
    const UserOfSearchOrError = await this.findByEmailUserRepository.findByEmail({ email });
    
    if(!UserOfSearchOrError.isLeft()){
      return left(new AlreadyExistsError())
    }

    infoDataUser.password = await this.createHash.create({ password })

    const UserOfAddOrError = await this.addUserRepository.add(infoDataUser);

    return right(UserOfAddOrError);
  }
}
