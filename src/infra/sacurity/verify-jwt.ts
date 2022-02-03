import { IVerifyJWT } from '@/data/contracts/sacurity'
import env from '@/shared/env'

import jwt from 'jsonwebtoken'


export class VerifyJWT implements IVerifyJWT{

  verify({ token, callback }: IVerifyJWT.Input): void {
    jwt.verify(token, env.jwt_secret as string, callback)
  }
}
