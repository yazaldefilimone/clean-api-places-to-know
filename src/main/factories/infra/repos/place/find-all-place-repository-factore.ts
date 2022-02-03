import { FindAllPlaceRepository } from "@/infra/repos/place";
import { PostGreFindAllRepository } from "@/infra/postgres/repository/place";
import { getCustomRepository } from "typeorm";

export const FindAllPlaceRepositoryFactore = () => {
  const postGreFindAllRepository = getCustomRepository(PostGreFindAllRepository)
  const findAllPlaceRepository = new FindAllPlaceRepository(postGreFindAllRepository)

  return findAllPlaceRepository
}
