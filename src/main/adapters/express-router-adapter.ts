import { RequestHandler } from 'express';
import { IUserController, IPlaceController } from '@/presentation/contracts/controller';
type ReturnOfExpressRouterUser = ( controller:IUserController | IPlaceController) =>  RequestHandler;

export const ExpressRouterAdapter:ReturnOfExpressRouterUser  = (controller:IUserController | IPlaceController) => async (request, response) => {
    const data = {
        body: request.body,
        params: request.params
    }
    const result  = await controller.handle(data);
    return response.status(result.statusCode).json(result.data) 
}
