import { DeletePlaceRepository } from "@/infra/repos/place";
import { PostGreDeleteRepository } from "@/infra/postgres/repository/place";
import { getCustomRepository } from "typeorm";

export const DeletePlaceRepositoryFactore = () => {
  const postGreDeleteRepository = getCustomRepository(PostGreDeleteRepository)
  const deletePlaceRepository = new DeletePlaceRepository(postGreDeleteRepository)

  return deletePlaceRepository
}
