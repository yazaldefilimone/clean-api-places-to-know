import { DeletePlaceUseCase } from "@/data/use-cases";
import { FindByIdPlaceRepositoryFactore, DeletePlaceRepositoryFactore } from "@/main/factories/infra/repos/place";

export const DeletePlaceFactore = () => {
  const findByIdPlaceRepository = FindByIdPlaceRepositoryFactore();
  const deletePlaceRepository =  DeletePlaceRepositoryFactore();
  const deletePlaceUseCase  = new DeletePlaceUseCase(deletePlaceRepository, findByIdPlaceRepository)
  
  return deletePlaceUseCase;
}
