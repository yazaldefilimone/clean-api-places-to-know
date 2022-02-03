import { PlaceDTO } from "@/data/contracts/dtos";
import { IUpdatePlaceRepository, IfindByIdPlaceRepository } from "@/data/contracts/repos";
import { Either, right, left } from "@/shared/error-handler/either";
import { IUpdatePlaceUseCase } from "@/domain/use-cases/place";
import { NotFound } from "@/domain/erros";

import { ResponseOfApiUnsplash } from '@/data/contracts/api'

export class UpdatePlaceUseCase implements IUpdatePlaceUseCase{
  constructor(
    private readonly updateRepository: IUpdatePlaceRepository,
    private readonly findByPlaceRepository: IfindByIdPlaceRepository,
    private readonly responseOfApiUnsplash: ResponseOfApiUnsplash
  ){}
  async execute(infoDataPlace:PlaceDTO):Promise<Either<NotFound, PlaceDTO>>{
    const { id, name } = infoDataPlace;

    const PlaceOfSearchOrError = await this.findByPlaceRepository.findByIdPlace({  id } as any);
    
    if(PlaceOfSearchOrError.isLeft()){
      return left(new NotFound('place'))
    }

    const PlaceOrError = await this.responseOfApiUnsplash.get({ name });

    if(PlaceOrError.isLeft()){
      return left(PlaceOrError.value)
    }

    PlaceOfSearchOrError.value.name = infoDataPlace.name 
    PlaceOfSearchOrError.value.place = PlaceOrError.value as any 

   await this.updateRepository.update(PlaceOfSearchOrError.value);

   return right(PlaceOfSearchOrError.value);
  }
}
