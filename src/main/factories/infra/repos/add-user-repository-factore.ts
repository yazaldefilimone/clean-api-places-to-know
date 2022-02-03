import { AddUserRepository } from "@/infra/repos";
import { PostGreAddRepository } from "@/infra/postgres/repository/user";
import { getCustomRepository } from "typeorm";

export const AddUserRepositoryFactore = () => {
  const postGreAddRepository = getCustomRepository(PostGreAddRepository)
  const addUserRepository = new AddUserRepository(postGreAddRepository)

  return addUserRepository
}
