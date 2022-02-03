import { CreateUserUseCase } from "@/data/use-cases";
import { findByEmailUserRepositoryFactore ,AddUserRepositoryFactore } from "@/main/factories/infra/repos";
import { CreateHash } from "../../../../infra/sacurity"
export const createUserFactore = () => {
  const findByEmailUserRepository = findByEmailUserRepositoryFactore();
  const addUserRepository =  AddUserRepositoryFactore();
  const createHash = new CreateHash();
  const createUserUseCase  = new CreateUserUseCase(addUserRepository,createHash, findByEmailUserRepository);

  return createUserUseCase;
}
