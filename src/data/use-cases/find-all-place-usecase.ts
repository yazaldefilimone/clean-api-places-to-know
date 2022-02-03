import { PlaceDTO } from "@/data/contracts/dtos";
import { IfindAllPlaceRepository } from "@/data/contracts/repos";
import { IFindAllPlaceUseCase } from "@/domain/use-cases/place";


export class FindPlaceUseCase implements IFindAllPlaceUseCase{
  constructor(private readonly findAllPlaceRepository:IfindAllPlaceRepository){}

  async execute():Promise<PlaceDTO[]>{

    const places = await this.findAllPlaceRepository.All();

    return places
  }
}
