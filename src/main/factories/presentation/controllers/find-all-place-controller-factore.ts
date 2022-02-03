import { findAllPlaceFactore } from '@/main/factories/data/use-case';
import { FindAllPlaceController } from "@/presentation/controllers/place";


export const findAllPlaceControllerFactore = () => {
  const findPlaceUseCase = findAllPlaceFactore();
  const findAllPlaceController = new FindAllPlaceController(findPlaceUseCase)
 
  return  findAllPlaceController
}



