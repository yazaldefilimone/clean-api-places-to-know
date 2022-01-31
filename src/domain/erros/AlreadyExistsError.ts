export class AlreadyExistsError extends Error{
  constructor(){
    super("Name place already exists.");
    this.name = "PlaceAlreadyExistsError"
  }
}
