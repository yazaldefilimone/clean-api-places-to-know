import { FindOnePlaceFactore } from '@/main/factories/data/use-case';
import { FindOnePlaceController } from "@/presentation/controllers/place";


export const findByIdPlaceControllerFactore = () => {
  const findByIdPlaceUseCase = FindOnePlaceFactore();
  const findByIdPlaceController = new FindOnePlaceController(findByIdPlaceUseCase)
 
  return  findByIdPlaceController
}



