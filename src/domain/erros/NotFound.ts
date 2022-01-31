export class NotFound extends Error{
  constructor(name:string){
    super(`${name} is not found`);
    this.name = "NotFound"
  }
}
