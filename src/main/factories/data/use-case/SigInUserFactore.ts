import { SigInUserUseCase } from "@/data/use-cases";
import { findByEmailUserRepositoryFactore } from "@/main/factories/infra/repos";

import { CreateJWT, CompareHash} from "@/infra/sacurity";

export const sigInUserFactore = () => {
  const findByEmailUserRepository = findByEmailUserRepositoryFactore();
  const createJWT = new CreateJWT();
  const compareHash = new CompareHash();

  const sigInUserUseCase  = new SigInUserUseCase(findByEmailUserRepository, createJWT, compareHash)

  return sigInUserUseCase;
}
