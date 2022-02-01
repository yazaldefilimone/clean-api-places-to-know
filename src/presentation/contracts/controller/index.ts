import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http"
import { User } from "@/infra/postgres/entities";

export interface IUserController {
  handle:(Request:HttpRequest<Omit<User, 'id'>>) => Promise<HttpResponse>
}
