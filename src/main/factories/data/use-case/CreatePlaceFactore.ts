import { CreatePlaceUseCase } from "@/data/use-cases";
import { findByPlaceRepositoryFactore, AddPlaceRepositoryFactore } from "@/main/factories/infra/repos/place";
import { AxiosHttpClient } from "@/infra/api";



export const createPlaceFactore = () => {
  const findByPlaceRepository = findByPlaceRepositoryFactore();
  const addPlaceRepository =  AddPlaceRepositoryFactore();
  const axiosHttpClient = new AxiosHttpClient()
  const createPlaceUseCase  = new CreatePlaceUseCase(addPlaceRepository, findByPlaceRepository, axiosHttpClient);
  
  return createPlaceUseCase;
}
