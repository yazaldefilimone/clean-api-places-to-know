import { FindOnePlaceUseCase } from "@/data/use-cases";
import { findByPlaceRepositoryFactore, 
  FindByIdPlaceRepositoryFactore } from "@/main/factories/infra/repos/place";



export const FindOnePlaceFactore = () => {
  const findByPlaceRepository = findByPlaceRepositoryFactore();
  const findByIdPlaceRefactore = FindByIdPlaceRepositoryFactore()
  const findOnePlaceUseCase  = new FindOnePlaceUseCase(findByPlaceRepository, findByIdPlaceRefactore);
  
  return findOnePlaceUseCase;
}
