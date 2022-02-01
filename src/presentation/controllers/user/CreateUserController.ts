import { IUserController } from "@/presentation/contracts/controller";
import { ok, serverError, badRequest } from "@/presentation/helpers";
import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http";
import { User } from "@/infra/postgres/entities";
import { ICreateUserUseCase } from "@/domain/use-cases/user";


export class CreateUserController implements IUserController{
  constructor(private readonly createUserUseCase:ICreateUserUseCase){}
  
  async handle(Request:HttpRequest<Omit<User, 'id'>>): Promise<HttpResponse>{
    try{

      const UserOrError = await this.createUserUseCase.execute(Request.body);

      if(UserOrError.isLeft()){
        return badRequest(UserOrError.value)
      }

      return ok(UserOrError.value)
      
    } catch(error) {
      return serverError(error)
    }
  }
}
