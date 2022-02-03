import {
  createPlaceControllerFactore,
  findByIdPlaceControllerFactore,
  updatePlaceControllerFactore,
  deletePlaceControllerFactore,
  findAllPlaceControllerFactore
} from "@/main/factories/presentation/controllers";
import { ExpressRouterAdapter as adapter } from '@/main/adapters/express-router-adapter'

import { Router } from "express";

const router = Router();

router.post('/place', adapter(createPlaceControllerFactore()));
router.get('/place', adapter(findAllPlaceControllerFactore()));
router.put('/place', adapter(updatePlaceControllerFactore()));
router.delete('/place/:id', adapter(deletePlaceControllerFactore()));
router.get('/place/:id', adapter(findByIdPlaceControllerFactore()));



export default router
