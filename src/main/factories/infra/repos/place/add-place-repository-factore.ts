import { AddPlaceRepository } from "@/infra/repos/place";
import { PostGreAddRepository } from "@/infra/postgres/repository/place";
import { getCustomRepository } from "typeorm";

export const AddPlaceRepositoryFactore = () => {
  const postGreAddRepository = getCustomRepository(PostGreAddRepository)
  const addPlaceRepository = new AddPlaceRepository(postGreAddRepository)

  return addPlaceRepository
}
