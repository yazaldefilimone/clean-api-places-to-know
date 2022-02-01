
export type HttpRequest<T = any> = {
  params?:any,
  body:T,
}

export type HttpResponse<T = any> = {
  statusCode:number,
  data:T,
}
