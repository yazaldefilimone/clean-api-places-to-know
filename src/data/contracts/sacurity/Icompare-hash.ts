
export interface ICompareHash {
  compare: (Input:ICompareHash.Input) => Promise<boolean>
}


export namespace ICompareHash{
  export type Input ={
    password:string;
    passwordHashed:string;
  }
}
