import { PlaceDTO } from "@/data/contracts/dtos";
import { IfindByPlaceRepository } from "@/data/contracts/repos";
import { Either, right, left } from "@/shared/error-handler/either";
import { IPostGreFindRepository } from "@/infra/helpers/repos/place";

type prop = { name:string }
export class FindByPlaceRepository implements IfindByPlaceRepository{
  constructor(private readonly postGreRepository:IPostGreFindRepository){}

  async findByPlace({ name }: IfindByPlaceRepository.Input):Promise<Either<undefined, PlaceDTO>>{

    const resultOrNull = await this.postGreRepository.findOne({ name } as any);

    if(!resultOrNull){
      return left(undefined);
    }

    return right(resultOrNull as PlaceDTO)
  }
}
