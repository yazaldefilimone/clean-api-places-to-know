import { UpdatePlaceRepository } from "@/infra/repos/place";
import { PostGreUpdateRepository } from "@/infra/postgres/repository/place";
import { getCustomRepository } from "typeorm";

export const UpdatePlaceRepositoryFactore = () => {
  const postGreUpdateRepository = getCustomRepository(PostGreUpdateRepository)
  const updatePlaceRepository = new UpdatePlaceRepository(postGreUpdateRepository)

  return updatePlaceRepository
}
