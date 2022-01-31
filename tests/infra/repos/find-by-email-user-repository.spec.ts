import {  UserDTO } from "../../../src/data/contracts/dtos";
import { IPostGreFindRepository } from "../../../src/infra/helpers/repos";
import { FindByEmailUserRepository } from "../../../src/infra/repos";

const PostGreRepository:jest.Mocked<IPostGreFindRepository> = {
  findOne:jest.fn()
}

type SUT = {
  sut:FindByEmailUserRepository,
  postGreRepository:typeof PostGreRepository
}


const makeSut = ():SUT => {
  const sut = new FindByEmailUserRepository(PostGreRepository)
  return {
    sut,
    postGreRepository:PostGreRepository
    
  }
}
describe('FindByEmailUserRepository', () => {
  it('Espero que quando chamar FindByEmailUserRepository.findById seja chamado com os parametros certos', async () => {
    const { sut, postGreRepository } = makeSut();

    let id = 'any_id';

    await sut.findById(id)
    expect(postGreRepository.findOne).toHaveBeenCalledWith(id);
  })
  it('Espero que quando chamar FindByEmailUserRepository.findById seja chamado o method findOne', async () => {
    const { sut, postGreRepository } = makeSut();

    let id = 'any_id';

    await sut.findById(id)
    expect(postGreRepository.findOne).toHaveBeenCalledTimes(1);
  })
  it('Espero que quando chamar FindByEmailUserRepository.findById sem o id que nao existe no DB ele retorn undefined ', async () => {
    const { sut, postGreRepository } = makeSut();

    postGreRepository.findOne.mockResolvedValue(undefined);

    let id = 'id_is_not_exists';

    const result = await sut.findById(id)

    expect(result.value).toBe(undefined);
  })
  
  it('Espero que quando chamar FindByEmailUserRepository.findById com o.id que existe no DB ele retorne o user', async () => {
    const { sut, postGreRepository } = makeSut();

    const userDB : UserDTO= {
      id:'id_is_exists';
      name:"any_name",
      email:'any_email',
      created_at:"1729192727266"
    }
    postGreRepository.findOne.mockResolvedValue(userDB);

    let id = 'id_is_exists';

    const result = await sut.findById(id)

    expect(result.value).toBe(userDB);
  })
})
