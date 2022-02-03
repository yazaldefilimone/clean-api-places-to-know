import { PlaceDTO } from "@/data/contracts/dtos";
import { IfindByPlaceRepository, IfindByIdPlaceRepository } from "@/data/contracts/repos";
import { Either, right, left } from "@/shared/error-handler/either";
import { IfindOnePlaceUseCase } from "@/domain/use-cases/place";
import { NotFound } from "@/domain/erros";


export class FindOnePlaceUseCase implements IfindOnePlaceUseCase{
  constructor(
    private readonly findByPlaceRepository:IfindByPlaceRepository,
    private readonly findByIdPlaceRepository:IfindByIdPlaceRepository
  ){}

  private async index({ name, id }: PlaceDTO) {
    if(name){
      return await this.findByPlaceRepository.findByPlace({ name })
      
    }
    
    return await this.findByIdPlaceRepository.findByIdPlace({ id } as any)

  }
  async execute({ name, id }:PlaceDTO | any):Promise<Either<NotFound, PlaceDTO>>{

    const PlaceOfSearchOrError = await this.index({ name, id })

    if(PlaceOfSearchOrError.isLeft()){
      return left(new NotFound('place'));
    }

     const place:PlaceDTO = PlaceOfSearchOrError.value as any
    return right(place);
  }
}
