


export interface ICreateHash {
  create:(Input:ICreateHash.Input) => Promise<string>
}


export namespace ICreateHash {
  export type Input = {
    password:string;
    salt?:number
  }

}
