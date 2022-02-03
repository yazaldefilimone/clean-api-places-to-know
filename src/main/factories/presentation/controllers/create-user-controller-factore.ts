import { createUserFactore } from '@/main/factories/data/use-case';
import { CreateUserController } from "@/presentation/controllers/user";


export const createUserControllerFactore = () => {
  const createUserUseCase = createUserFactore();
  const createUserController = new CreateUserController(createUserUseCase)
 
  return  createUserController
}



