import { DeletePlaceFactore } from '@/main/factories/data/use-case';
import { DeletePlaceController } from "@/presentation/controllers/place";


export const deletePlaceControllerFactore = () => {
  const deletePlaceUseCase = DeletePlaceFactore();
  const deletePlaceController = new DeletePlaceController(deletePlaceUseCase)
 
  return  deletePlaceController
}



