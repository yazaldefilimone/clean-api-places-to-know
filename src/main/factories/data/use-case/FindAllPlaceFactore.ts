import { FindPlaceUseCase } from "@/data/use-cases";
import { FindAllPlaceRepositoryFactore } from "@/main/factories/infra/repos/place";


export const findAllPlaceFactore = () => {
  const findAllPlaceRepository = FindAllPlaceRepositoryFactore();
  const findAllPlaceUseCase  = new FindPlaceUseCase(findAllPlaceRepository);
  
  return findAllPlaceUseCase;
}
