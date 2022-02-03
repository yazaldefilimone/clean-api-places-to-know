import { PlaceDTO } from "@/data/contracts/dtos";
import { IDeletePlaceRepository, IfindByIdPlaceRepository } from "@/data/contracts/repos";

import { IDeletePlaceUseCase } from "@/domain/use-cases/place";
import { NotFound } from "@/domain/erros";


export class DeletePlaceUseCase implements IDeletePlaceUseCase{
  constructor(
    private readonly deletePlaceRepository:IDeletePlaceRepository,
    private readonly findByIdPlaceRepository:IfindByIdPlaceRepository,
  ){}
  async execute({ id }:PlaceDTO | any):Promise<void | NotFound>{
    const PlaceOfSearchOrError = await this.findByIdPlaceRepository.findByIdPlace({  id });
    
    if(PlaceOfSearchOrError.isLeft()){
      return new NotFound('place')
    
    };


    await this.deletePlaceRepository.deletePlace({ id  } as any)
  }
}
