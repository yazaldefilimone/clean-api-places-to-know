import { ResponseOfApiUnsplash } from '../../data/contracts/api'
import env from "../../shared/env"
import axios from 'axios'
import { NotFound } from '@/domain/erros';
import { Either, left, right} from '@/shared/error-handler/either';

const ReturnUrl =  (search:string): string => {

  return `https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=2&client_id=${env.api_acess_key}`
}

type Input = ResponseOfApiUnsplash.Input
export class AxiosHttpClient implements ResponseOfApiUnsplash{
  async get ({ name }: Input): Promise<Either<NotFound, string>> {
    const result = await axios.get(ReturnUrl(name))
    const imge = result.data.results[0].urls.full as string
    if(result.statusText !== 'OK'){
      return left(new NotFound(name))      
    }
    
    return right(imge)
  }
}



export class AxiosHttpClientFake implements ResponseOfApiUnsplash{
  async get ({ name }: Input): Promise<Either<NotFound, string>> {
    
    const result = ReturnUrl(name);

    if(result == undefined){
      return left(new NotFound(name))      
    }


    return right(result)
  }
}
