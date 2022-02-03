import { ICreateJWt } from '@/data/contracts/sacurity'
import env from '@/shared/env'

import jwt from 'jsonwebtoken'



export class CreateJWT implements ICreateJWt{
  create({ payload, expires = '5d'}: ICreateJWt.Input):string{
    const token = jwt.sign(payload, env.jwt_secret as string, { expiresIn: expires })
  
    return token
  }
}
