import { IPlaceController } from "@/presentation/contracts/controller";
import { ok, serverError, badRequest } from "@/presentation/helpers";
import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http";
import { Place } from "@/infra/postgres/entities";
import { ICreatePlaceUseCase } from "@/domain/use-cases/place";


export class CreatePlaceController implements IPlaceController{
  constructor(private readonly createPlaceUseCase:ICreatePlaceUseCase){}
  
  async handle(Request:HttpRequest<Omit<Place, 'id'>>): Promise<HttpResponse>{
    try{

      const PlaceOrError = await this.createPlaceUseCase.execute(Request.body as any);

      if(PlaceOrError.isLeft()){
        return badRequest(PlaceOrError.value)
      }

      return ok(PlaceOrError.value)
      
    } catch(error) {
      console.log(error)
      return serverError(error)
    }
  }
}
