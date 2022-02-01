import { createUserFactore } from '@/main/factories/data/use-case/CreateUserFactore';
import { CreateUserController } from "@/presentation/controllers/user";


export const createUserControllerFactore = () => {
  const createUserUseCase = createUserFactore();
  const createUserController = new CreateUserController(createUserUseCase)
 
  return  createUserController
}



