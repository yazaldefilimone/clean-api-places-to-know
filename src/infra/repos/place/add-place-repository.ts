import {  PlaceDTO } from "@/data/contracts/dtos";
import { IAddPlaceRepository } from "@/data/contracts/repos";
import { IPostGreAddRepository } from "@/infra/helpers/repos/place";


export class AddPlaceRepository implements IAddPlaceRepository{
  constructor(private readonly postGreRepository:IPostGreAddRepository){}

  async add(data:PlaceDTO):Promise<PlaceDTO>{
    const resultOrNull = await this.postGreRepository.add(data);

    return resultOrNull
  }
}
