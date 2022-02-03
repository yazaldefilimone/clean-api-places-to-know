import { VerifyCallback } from 'jsonwebtoken'
export interface IVerifyJWT{
  verify:({ token, callback }:IVerifyJWT.Input) => void;
}

export namespace IVerifyJWT{
  export type Input = {
    token:string;
    callback:VerifyCallback
  }
}


