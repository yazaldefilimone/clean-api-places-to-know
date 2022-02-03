import { IPlaceController } from "@/presentation/contracts/controller";
import { ok, serverError, badRequest } from "@/presentation/helpers";
import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http";
import { Place } from "@/infra/postgres/entities";
import { IfindOnePlaceUseCase } from "@/domain/use-cases/place";


export class FindOnePlaceController implements IPlaceController{
  constructor(private readonly findOnePlaceUseCase:IfindOnePlaceUseCase){}
  
  async handle(Request:HttpRequest<Omit<Place, 'id'>>): Promise<HttpResponse>{
    try{

      const { id } = Request.params as any;
      const PlaceOrError = await this.findOnePlaceUseCase.execute({ id });

      if(PlaceOrError.isLeft()){
        return badRequest(PlaceOrError.value)
      }

      return ok(PlaceOrError.value)
      
    } catch(error) {
      return serverError(error)
    }
  }
}
