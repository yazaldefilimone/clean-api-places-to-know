export interface ICreateJWt{
  create:(Input:ICreateJWt.Input) => string
}

export namespace ICreateJWt{
  export type Input ={
    payload:Object;
    expires?:string
  }
}
