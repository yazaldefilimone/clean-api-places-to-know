import { IfindByEmailUserRepository } from "../../../src/data/contracts/repos";
import {  UserDTO } from "../../../src/data/contracts/dtos";
import { Either, right, left } from "../../../src/shared/error-handler/either";


interface IPostGreRepository{
  findOne:() => Promise<any>
}


class FindByEmailUserRepository implements IfindByEmailUserRepository{
  constructor(private readonly postGreRepository:IPostGreRepository){}

  async findById(id:string):Promise<Either<null | undefined, UserDTO>>{
    const resultOrNull = await this.postGreRepository.findOne(id);

    if(!resultOrNull){
      return left(undefined);
    }

    return right(resultOrNull as UserDTO)
  }
}



const PostGreRepository:jest.Mocked<IPostGreRepository> = {
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



})