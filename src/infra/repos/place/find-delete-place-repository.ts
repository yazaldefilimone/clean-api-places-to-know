import {  PlaceDTO } from "@/data/contracts/dtos";
import { IDeletePlaceRepository } from "@/data/contracts/repos";
import { IPostGreDeleteRepository } from "@/infra/helpers/repos/place";


export class DeletePlaceRepository implements IDeletePlaceRepository{
  constructor(private readonly postGreRepository:IPostGreDeleteRepository){}

  async deletePlace({ id }:PlaceDTO):Promise<void>{
    
    await this.postGreRepository.deletePlace({ id } as any);

  }
}
