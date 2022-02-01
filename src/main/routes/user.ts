import { createUserControllerFactore } from "../../main/factories/presentation/controllers";

import { Router } from "express";

const router = Router();

router.post('/user', createUserControllerFactore().handle);



export default router
