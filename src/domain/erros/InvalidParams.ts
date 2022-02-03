export class InvalidParams extends Error{
  constructor(name:string){
    super(`params ${name} is invalid`);
    this.name = "InvalidParams"
  }
}
