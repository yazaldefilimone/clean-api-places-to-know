import { UserDTO } from "@/data/contracts/dtos";
import { IAddUserRepository, IfindByEmailUserRepository } from "@/data/contracts/repos";
import { Either, right, left } from "../../shared/error-handler/either";
import { ICreateUserUseCase } from "../../domain/use-cases/user";
import { AlreadyExistsError } from "../../domain/erros";

export class CreateUserUseCase implements ICreateUserUseCase{
  name:string = '';
  email:string = '';
  
  constructor(
    private readonly addUserRepository:IAddUserRepository,
    private readonly findByEmailUserRepository:IfindByEmailUserRepository
  ){}

  async execute(infoDataUser:UserDTO):Promise<Either<AlreadyExistsError, UserDTO>>{
    this.name = infoDataUser.name
    this.email = infoDataUser.email

    const UserOfSearchOrError = await this.findByEmailUserRepository.findById(infoDataUser.id as string);
    
    if(UserOfSearchOrError.isLeft()){
      return left(new AlreadyExistsError())
    }

    const UserOfAddOrError = await this.addUserRepository.add(infoDataUser);

    return right(UserOfAddOrError);
  }
}
