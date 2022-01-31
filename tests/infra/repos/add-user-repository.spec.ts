import {  UserDTO } from "@/data/contracts/dtos";
import { IAddUserRepository } from "@/data/contracts/repos";


interface IPostGreAddRepository {
   add: (data:UserDTO) => Promise<undefined>;
}


const PostGreRepository:jest.Mocked<IPostGreAddRepository> = {
  add:jest.fn()
}

class AddUserRepository implements IAddUserRepository{
  constructor(private readonly postGreRepository: IPostGreAddRepository){}
  
  async add(data:UserDTO):Promise<UserDTO>{
    
   const user =  await this.postGreRepository.add(data);

   return user
  }
}


type SUT = {
  sut:AddUserRepository,
  postGreRepository:typeof PostGreRepository
}


const makeSut = ():SUT => {
  const sut = new AddUserRepository(PostGreRepository)
  return {
    sut,
    postGreRepository:PostGreRepository
    
  }
}

const returnUserFake = ():UserDTO => {
  let user:UserDTO = {
    id:'any_id',
    name:'any_name',
    email:'any_email',
    password:'any_password',
    created_at:'any_date'
  };
  
  return user
}


describe('AddUserRepository', () => {
  it('Espero que quando chamar AddUserRepository.add seja chamado com os parametros certos', async () => {
    const { sut, postGreRepository } = makeSut();

    await sut.add(returnUserFake())

    expect(postGreRepository.add).toHaveBeenCalledWith(returnUserFake());
  })
  
  it('Espero que quando chamar AddUserRepository.add seja chamado o method save', async () => {
    const { sut, postGreRepository } = makeSut();

    await sut.add(returnUserFake())

    expect(postGreRepository.add).toHaveBeenCalledTimes(1);
  })
  
  it('Espero que quando chamar AddUserRepository.add com os parametros certos ele retorne undefined', async () => {
    const { sut, postGreRepository } = makeSut();

    postGreRepository.add.mockResolvedValue(undefined);


    const result = await sut.add(returnUserFake())

    expect(result).toBe(undefined);
  })

})
