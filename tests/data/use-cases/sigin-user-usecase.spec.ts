import { SigInUserUseCase } from "../../../src/data/use-cases";
import { Either, left, right } from "../../../src/shared/error-handler/either"
import { UserDTO } from "../../../src/data/contracts/dtos"
import { ICompareHash, ICreateJWt } from '../../../src/data/contracts/sacurity'
import { IAddUserRepository, IfindByEmailUserRepository} from '../../../src/data/contracts/repos'
import { NotFound, InvalidParams } from '../../../src/domain/erros'

const db:UserDTO[] = [
  {
    id: 'any_id_1',
    name:'yazalde_1',
    email:"yazalde_1@gmail",
    password:'12345-hash',
    created_at: new Date('2022-02-03T09:34:39.462Z')
  },
  {
    id: 'any_id_2',
    name:'yazalde_2',
    email:"yazalde_2@gmail",
    password:'12345-hash',
    created_at: new Date('2022-02-03T09:36:49.462Z')
  }
];
class FindByPlaceRepository implements IfindByEmailUserRepository{

  async findByEmail({ email }:UserDTO | any):Promise<Either<undefined, UserDTO>>{
   const result = db.find(user => user.email == email)
    
   if(!result){
     return left(undefined)
   }


   return right(result as any)
  }
}




class CreateJwT implements ICreateJWt{
  create(Input:ICreateJWt.Input): string{

    return ''
  }
}


class CompareHash implements ICompareHash {
  async compare(Input:ICompareHash.Input):Promise<boolean>{

    return true
  }
}


const makeSut = () => {
  const findByEmailUserRepository =new  FindByPlaceRepository()
  const createJwt = new CreateJwT();
  const compateHash = new CompareHash();


  const sut = new SigInUserUseCase(findByEmailUserRepository, createJwt, compateHash)

  return {
    sut,
    createJwt,
    compateHash,
    findByEmailUserRepository
  }
}

describe('SigInUserUseCase', () => {
  it('Expero que retorn NotFound se nao encotrar os dados passados', async ()  => {
    const { sut  } = makeSut()
    const body:UserDTO= {
      name:'any',
      email:"my_email",
      password:'1234-hashed'
    }
    const result = await sut.execute(body);
    expect(result.value).toEqual(new NotFound('user'))
  })
  
  it('Expero que retorn o user se encotrar os dados passados', async ()  => {
    const { sut  } = makeSut()
    const body:UserDTO= {
      name:'yazalde_2',
      email:"yazalde_2@gmail",
      password:'12345-hash',
    }
    const result: any = await sut.execute(body);
    expect(result.value.user.name).toBe(body.name)
    expect(result.value.user.email).toBe(body.email)
    expect(result.value.user).toHaveProperty('id')

  })
  it('Expero que o CompareHash.compare seja chamando uma vez', async ()  => {

    const { sut, findByEmailUserRepository} = makeSut()
    const body:UserDTO= {
      name:'yazalde_2',
      email:"yazalde_2@gmail",
      password:'1235',
    }
    const findByEmailUserRepositorySpy = jest.spyOn(findByEmailUserRepository, 'findByEmail')
    await sut.execute(body);
    expect(findByEmailUserRepositorySpy).toHaveReturnedTimes(1)
  })
  
  it('Expero que o CompareHash.compare seja chamando uma vez', async ()  => {
    const { sut, compateHash} = makeSut()
    const body:UserDTO= {
      name:'yazalde_2',
      email:"yazalde_2@gmail",
      password:'1235',
    }
    const compateHashSpy = jest.spyOn(compateHash, 'compare')
    await sut.execute(body);
    expect(compateHashSpy).toHaveReturnedTimes(1)
  })
  

  it('Expero que retorn o InvalidParams se o password estiver errado', async ()  => {
    const { sut, compateHash} = makeSut()
    const body:UserDTO= {
      name:'yazalde_2',
      email:"yazalde_2@gmail",
      password:'1235',
    }
    const compateHashSpy = jest.spyOn(compateHash, 'compare').mockResolvedValueOnce(false)
    const result = await sut.execute(body);
    expect(result.value).toEqual(new InvalidParams('password'))
  })

})
