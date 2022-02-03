import { FindByIdPlaceRepository } from "@/infra/repos/place";
import { PostGreByIdRepository } from "@/infra/postgres/repository/place";
import { getCustomRepository } from "typeorm";

export const FindByIdPlaceRepositoryFactore = () => {
  const postGreFindByIdRepository = getCustomRepository(PostGreByIdRepository)
  const findByIdPlaceRepository = new FindByIdPlaceRepository(postGreFindByIdRepository)

  return findByIdPlaceRepository
}
