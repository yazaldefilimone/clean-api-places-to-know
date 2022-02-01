import { FindByEmailUserRepository } from "../../../../infra/repos";
import { PostGreFindRepository } from "../../../../infra/postgres/repository/user";
import { getCustomRepository } from "typeorm";



export const findByEmailUserRepositoryFactore = () => {
  const postGreFindRepository = getCustomRepository(PostGreFindRepository);

  const findByEmailUserRepository = new FindByEmailUserRepository(postGreFindRepository)

  return findByEmailUserRepository
}

