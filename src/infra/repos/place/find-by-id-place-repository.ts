import {  PlaceDTO } from "@/data/contracts/dtos";
import { IfindByIdPlaceRepository } from "@/data/contracts/repos";
import { IPostGreFindByIdRepository } from "@/infra/helpers/repos/place";
import { Either, right, left} from '@/shared/error-handler/either'

export class FindByIdPlaceRepository implements IfindByIdPlaceRepository{
  constructor(private readonly postGreRepository:IPostGreFindByIdRepository){}

  async findByIdPlace({ id }:PlaceDTO | any):Promise<Either<undefined, PlaceDTO>>{
    const resultOrNull = await this.postGreRepository.findById({ id } as any);

    if(!resultOrNull) return left(undefined);


    return right(resultOrNull as PlaceDTO)
  }
}
