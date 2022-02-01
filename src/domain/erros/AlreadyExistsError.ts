export class AlreadyExistsError extends Error{
  constructor(){
    super("already exists");
    this.name = "AlreadyExistsError"
  }
}
