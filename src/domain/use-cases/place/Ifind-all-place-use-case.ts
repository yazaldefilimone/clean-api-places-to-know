import { Place } from "@/domain/entities";


export interface IFindAllPlaceUseCase{
  execute:() => Promise<Place[]>
}
