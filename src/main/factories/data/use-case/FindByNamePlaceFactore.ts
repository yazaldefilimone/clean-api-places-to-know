import { CreatePlaceUseCase } from "@/data/use-cases";
import { findByPlaceRepositoryFactore, AddPlaceRepositoryFactore } from "@/main/factories/infra/repos/place";
import { AxiosHttpClientFake } from "@/infra/api";



export const createPlaceFactore = () => {
  const findByPlaceRepository = findByPlaceRepositoryFactore();
  const addPlaceRepository =  AddPlaceRepositoryFactore();
  const axiosHttpClient = new AxiosHttpClientFake()
  const createPlaceUseCase  = new CreatePlaceUseCase(addPlaceRepository, findByPlaceRepository, axiosHttpClient);
  
  return createPlaceUseCase;
}
