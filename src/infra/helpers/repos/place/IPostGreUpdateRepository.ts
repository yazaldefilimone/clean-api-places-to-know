import { PlaceDTO } from "@/data/contracts/dtos";

export interface IPostGreUpdateRepository{
  update:(data:PlaceDTO) => Promise<void>
}
