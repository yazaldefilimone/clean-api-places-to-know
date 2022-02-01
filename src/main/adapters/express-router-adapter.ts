import { RequestHandler } from 'express';
import { IUserController } from '@/presentation/contracts/controller';

type ReturnOfExpressRouter = ( controller:IUserController) =>  RequestHandler;

export const ExpressRouterAdapter:ReturnOfExpressRouter = (controller:IUserController) => async (request, response) => {

    const result  = await controller.handle(request.body);

    return response.status(result.statusCode).json(result.data)
}
