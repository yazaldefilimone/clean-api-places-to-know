import { createUserControllerFactore, SigInUserControllerFactore } from "../../main/factories/presentation/controllers";
import { ExpressRouterAdapter } from '../../main/adapters/express-router-adapter'

import { Router } from "express";

const router = Router();

router.post('/user', ExpressRouterAdapter(createUserControllerFactore()));
router.post('/user/login', ExpressRouterAdapter(SigInUserControllerFactore()));



export default router
