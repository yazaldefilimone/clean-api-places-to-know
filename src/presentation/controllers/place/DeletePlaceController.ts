import { IPlaceController } from "@/presentation/contracts/controller";
import { ok, serverError, badRequest } from "@/presentation/helpers";
import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http";
import { Place } from "@/infra/postgres/entities";
import { IDeletePlaceUseCase } from "@/domain/use-cases/place";
import { NotFound } from "@/domain/erros";


export class DeletePlaceController implements IPlaceController{
  constructor(private readonly deletePlaceUseCase:IDeletePlaceUseCase){}
  
  async handle(Request:HttpRequest<Omit<Place, 'id'>>): Promise<HttpResponse>{
    try{
      const { id } = Request.params as any;
     
      const result = await this.deletePlaceUseCase.execute({ id } as any);
     

      if(result instanceof NotFound){
       return  badRequest(result)
      }

      
      return ok({ok: result})
      
    } catch(error) {
      return serverError(error)
    }
  }}
