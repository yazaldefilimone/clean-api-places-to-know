import {  PlaceDTO } from "@/data/contracts/dtos";
import { IUpdatePlaceRepository } from "@/data/contracts/repos";
import { IPostGreUpdateRepository } from "@/infra/helpers/repos/place";


export class UpdatePlaceRepository implements IUpdatePlaceRepository{
  constructor(private readonly postGreRepository:IPostGreUpdateRepository){}

  async update(data:PlaceDTO):Promise<void>{
    await this.postGreRepository.update(data);
  }
}
