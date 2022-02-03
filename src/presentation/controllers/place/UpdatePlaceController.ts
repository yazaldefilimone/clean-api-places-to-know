import { IPlaceController } from "@/presentation/contracts/controller";
import { ok, serverError, badRequest } from "@/presentation/helpers";
import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http";
import { Place } from "@/infra/postgres/entities";
import { IUpdatePlaceUseCase } from "@/domain/use-cases/place";


export class UpdatePlaceController implements IPlaceController{
  constructor(private readonly updatePlaceUseCase:IUpdatePlaceUseCase){}
  
  async handle(Request:HttpRequest<Omit<Place, 'id'>>): Promise<HttpResponse>{
    try{

      const PlaceOrError = await this.updatePlaceUseCase.execute(Request.body as any);

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
