import { UpdatePlaceUseCase } from "@/data/use-cases";
import { 
  FindByIdPlaceRepositoryFactore, 
  UpdatePlaceRepositoryFactore } from "@/main/factories/infra/repos/place";
import { AxiosHttpClientFake } from "@/infra/api"



export const UpdatePlaceFactore = () => {
  const findByPlaceRepository = FindByIdPlaceRepositoryFactore();
  const updatePlaceRepository=  UpdatePlaceRepositoryFactore();
  const axiosHttpClient = new AxiosHttpClientFake()
  const updatePlaceUseCase  = new UpdatePlaceUseCase(updatePlaceRepository,findByPlaceRepository,  axiosHttpClient);
  return updatePlaceUseCase;
}
