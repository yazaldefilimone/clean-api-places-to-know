import { FindOnePlaceUseCase } from "@/data/use-cases";
import { findByPlaceRepositoryFactore,
  FindByIdPlaceRepositoryFactore } from "@/main/factories/infra/repos/place";



export const FindByIdPlaceFactore = () => {
  const findByPlaceRepository = findByPlaceRepositoryFactore();
  const findByIdPlaceRepository = FindByIdPlaceRepositoryFactore()
  const findByIdPlaceUseCase  = new FindOnePlaceUseCase(findByPlaceRepository, findByIdPlaceRepository)

  return findByIdPlaceUseCase;
}
