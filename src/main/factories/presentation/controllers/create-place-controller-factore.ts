import { createPlaceFactore } from '@/main/factories/data/use-case';
import { CreatePlaceController } from "@/presentation/controllers/place";


export const createPlaceControllerFactore = () => {
  const createPlaceUseCase = createPlaceFactore();
  const createPlaceController = new CreatePlaceController(createPlaceUseCase)
 
  return  createPlaceController
}



