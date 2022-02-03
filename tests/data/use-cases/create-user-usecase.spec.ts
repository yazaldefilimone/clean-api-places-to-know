import { CreateUserUseCase } from "../../../src/data/use-cases";
import { IAddUserRepository, IfindByEmailUserRepository} from '../../../src/data/contracts/repos'
import { ICreateHash } from '../../../src/data/contracts/sacurity'
import { UserDTO } from "../../../src/data/contracts/dtos"
import { Either, left, right } from "../../../src/shared/error-handler/either"
import { AlreadyExistsError } from "../../../src/domain/erros";

import { v4 } from 'uuid'
const db:UserDTO[] = [];

class FindByPlaceRepository implements IfindByEmailUserRepository{

  async findByEmail({ email }:UserDTO | any):Promise<Either<undefined, UserDTO>>{
   const result = db.find(user => user.email == email)
    
   if(!result){
     return left(undefined)
   }


   return right(result as any)
  }
}


class AddUserRepository implements IAddUserRepository{
  async add(data: UserDTO):Promise<UserDTO>{
    const dataUser = {
      id:v4(),
      ...data,
      created_at: new Date('2022-02-03T09:34:39.462Z')
    }
    db.push(dataUser);

    return dataUser
  }
}


class CreateHash implements ICreateHash{
  async create(Input: ICreateHash.Input): Promise<string>{
  
    return `${Input.password}-hashed`;
  }
}






const makeSut = () => {
    const findByPlaceRepository = new FindByPlaceRepository();
    const addUserRepository = new AddUserRepository();
    const createHash = new CreateHash();

    const sut = new CreateUserUseCase(addUserRepository, createHash, findByPlaceRepository)
    return {
      sut
    }
}

describe('CreateUserUseCase', () => {
  it('Expero que CreateUserUseCase.execute receba os dados correctos', async () => {
    const { sut } = makeSut()
    const body = {
      name:'yazalde',
      email:'yazaldefill@gmail',
      password:'any__password'
    }
    const result = await sut.execute(body)

    expect(result.value.name).toBe(body.name)
  })
  
  it('Expero que CreateUserUseCase.execute com os parametros certos seja salvo o user', async () => {
    const { sut } = makeSut()
    const body = {
      name:'yazal',
      email:'yazalde@gmail',
      password:'any__password'
    }
    const result = await sut.execute(body)

    expect(result.value).toHaveProperty('created_at')
  })

  it('Expero que CreateUserUseCase.execute com os parametros que ja existem seja retornado o AlreadyExistsError', async () => {
    const { sut } = makeSut()
    const body = {
      name:'yazal',
      email:'yazaldefill@gmail',
      password:'any__password'
    }
    const result = await sut.execute(body)

    expect(result.value.name).toBe(new AlreadyExistsError().name)
  })

})
