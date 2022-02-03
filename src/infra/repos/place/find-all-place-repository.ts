import {  PlaceDTO } from "@/data/contracts/dtos";
import { IfindAllPlaceRepository } from "@/data/contracts/repos";
import { IPostGreFindAllRepository } from "@/infra/helpers/repos/place";


export class FindAllPlaceRepository implements IfindAllPlaceRepository{
  constructor(private readonly postGreRepository:IPostGreFindAllRepository){}

  async All():Promise<PlaceDTO[]>{
    const resultOrNull = await this.postGreRepository.All();

    return resultOrNull
  }
}
