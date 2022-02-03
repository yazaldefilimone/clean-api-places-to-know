import { ResponseOfApiUnsplash } from '../../data/contracts/api'
import env from "../../shared/env"
//import axios from 'axios'
import { NotFound } from '@/domain/erros';
import { Either, left, right} from '@/shared/error-handler/either';

const ReturnUrl = (name:string): string  => `https://api.unsplash.com/${env.api_acess_key}/random/photos?name=${name}`;


type Input = ResponseOfApiUnsplash.Input
/*export class AxiosHttpClient implements ResponseOfApiUnsplash{
  async get ({ name }: Input): Promise<Either<NotFound, string>> {
    const result = await axios.get(ReturnUrl(name), { method:'GET' })
    if(result.statusText !== 'OK'){
      return left(new NotFound(name))      
    }
    
    return right(result.data.url.raw as string)
  }
}*/



export class AxiosHttpClientFake implements ResponseOfApiUnsplash{
  async get ({ name }: Input): Promise<Either<NotFound, string>> {
    
    const result = ReturnUrl(name);

    if(result == undefined){
      return left(new NotFound(name))      
    }


    return right(result)
  }
}
