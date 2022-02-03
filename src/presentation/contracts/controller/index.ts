import { HttpRequest, HttpResponse } from "@/presentation/contracts/dtos/http"

import { User, Place } from "@/infra/postgres/entities";

export interface IUserController {
  handle:(Request:HttpRequest<Omit<User, 'id'>>) => Promise<HttpResponse>
}

export interface IPlaceController {
  handle:(Request:HttpRequest<Omit<Place, 'id'>>) => Promise<HttpResponse>
}
