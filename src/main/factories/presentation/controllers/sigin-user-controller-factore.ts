import { sigInUserFactore } from '@/main/factories/data/use-case';
import { SigInUserController } from "@/presentation/controllers/user";


export const SigInUserControllerFactore = () => {
  const siginUserUseCase = sigInUserFactore();
  const siginUserController = new SigInUserController(siginUserUseCase)
 
  return  siginUserController
}



