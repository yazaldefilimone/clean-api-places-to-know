import { IPlaceController } from "@/presentation/contracts/controller";
import { ok, serverError, badRequest } from "@/presentation/helpers";
import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http";
import { Place } from "@/infra/postgres/entities";
import { IFindAllPlaceUseCase } from "@/domain/use-cases/place";


export class FindAllPlaceController implements IPlaceController{
  constructor(private readonly findAllPlaceUseCase:IFindAllPlaceUseCase){}
  
  async handle(Request:HttpRequest<Omit<Place, 'id'>>): Promise<HttpResponse>{
    try{

      const PlaceOrError = await this.findAllPlaceUseCase.execute();


      return ok(PlaceOrError)
      
    } catch(error) {
      console.log(error)
      return serverError(error)
    }
  }
}
