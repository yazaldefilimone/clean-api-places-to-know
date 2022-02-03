import { FindByPlaceRepository } from "@/infra/repos/place";
import { PostGreFindRepository } from "@/infra/postgres/repository/place";
import { getCustomRepository } from "typeorm";



export const findByPlaceRepositoryFactore = () => {
  const postGreFindRepository = getCustomRepository(PostGreFindRepository);

  const findByPlaceRepository = new FindByPlaceRepository(postGreFindRepository)

  return findByPlaceRepository
}

