import { PlaceDTO } from "@/data/contracts/dtos";
import { IAddPlaceRepository, IfindByPlaceRepository } from "@/data/contracts/repos";
import { Either, right, left } from "@/shared/error-handler/either";
import { ICreatePlaceUseCase } from "@/domain/use-cases/place";
import { AlreadyExistsError, NotFound } from "@/domain/erros";

import { ResponseOfApiUnsplash } from '../../data/contracts/api'

export class CreatePlaceUseCase implements ICreatePlaceUseCase{
  constructor(
    private readonly addPlaceRepository:IAddPlaceRepository,
    private readonly findByPlaceRepository:IfindByPlaceRepository,
    private readonly responseOfApiUnsplash: ResponseOfApiUnsplash
  ){}
  async execute(infoDataPlace:PlaceDTO):Promise<Either<AlreadyExistsError | NotFound, PlaceDTO>>{
    const { name } = infoDataPlace;

    const PlaceOfSearchOrError = await this.findByPlaceRepository.findByPlace({  name });
    
    if(!PlaceOfSearchOrError.isLeft()){
      return left(new AlreadyExistsError())
    }

    const PlaceOrError = await this.responseOfApiUnsplash.get({ name });

    if(PlaceOrError.isLeft()){
      return left(PlaceOrError.value)
    }

    infoDataPlace.place = PlaceOrError.value as any

    const PlaceOfAddOrError = await this.addPlaceRepository.add(infoDataPlace);

    return right(PlaceOfAddOrError);
  }
}
