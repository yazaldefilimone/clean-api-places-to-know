import { UpdatePlaceFactore } from '@/main/factories/data/use-case';
import { UpdatePlaceController } from "@/presentation/controllers/place";


export const updatePlaceControllerFactore = () => {
  const updatePlaceUseCase = UpdatePlaceFactore();
  const updatePlaceController = new UpdatePlaceController(updatePlaceUseCase)
 
  return  updatePlaceController
}



