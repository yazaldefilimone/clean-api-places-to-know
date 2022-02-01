import { CreateUserUseCase } from "@/data/use-cases";
import { findByEmailUserRepositoryFactore ,AddUserRepositoryFactore } from "@/main/factories/infra/repos";

export const createUserFactore = () => {
  const findByEmailUserRepository = findByEmailUserRepositoryFactore();
  const addUserRepository =  AddUserRepositoryFactore();
  const createUserUseCase  = new CreateUserUseCase(addUserRepository, findByEmailUserRepository);

  return createUserUseCase;
}
