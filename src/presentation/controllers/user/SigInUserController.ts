import { IUserController } from "@/presentation/contracts/controller";
import { ok, serverError, badRequest } from "@/presentation/helpers";
import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http";
import { User } from "@/infra/postgres/entities";
import { ISigInUserUseCase } from "@/domain/use-cases/user";


export class SigInUserController implements IUserController{
  constructor(private readonly sigInUserUseCase:ISigInUserUseCase){}
  
  async handle(Request:HttpRequest<Omit<User, 'id'>>): Promise<HttpResponse>{
    try{
      
      const UserOrError = await this.sigInUserUseCase.execute(Request.body as any);

      if(UserOrError.isLeft()){
        return badRequest(UserOrError.value)
      }

      return ok(UserOrError.value)
      
    } catch(error) {
      return serverError(error)
    }
  }
}
