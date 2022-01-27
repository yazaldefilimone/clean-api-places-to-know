import { CreateUserUseCase } from "@/data/use-cases";
import { UserDTO } from "@/data/contracts/dtos";
import { IcreateUserRepository } from "@/data/contracts/repos";

class CreateUserRepositorySpy implements IcreateUserRepository{
  dataAdd = [] as Array<UserDTO>;
  dataId:string = '';

  async add(dataReceivedOfUser:UserDTO):Promise<void>{
    this.dataAdd.push(dataReceivedOfUser);
  }

  async findById(id:string):Promise<UserDTO | any>{
    this.dataId = id
    const result = this.dataAdd.find(value => value.id === id);
    return result;
  }
}

type ISut = {
  sut: CreateUserUseCase,
  createUserRepository:CreateUserRepositorySpy
}
const makeSut = ():ISut => {
  const createUserRepository = new CreateUserRepositorySpy()
  const sut = new CreateUserUseCase(createUserRepository);
  return {
    sut,
    createUserRepository
  }
}

describe("CreateUserUseCase", () => {

  it('Should CreateUserUseCase receive correct name and place when call execute', async () => { 
    const { sut }   = makeSut();
    const data = {
      name:"valid_name",
      place:"http://place.com"
    }
    await sut.execute(data);
    expect(sut.name).toEqual(data.name);
    expect(sut.place).toEqual(data.place);
  })
  
  it('Should CreateUserUseCase call createUserRepository.findById with correct id', async () => { 
    const { sut, createUserRepository }   = makeSut();
    const data = {
      id:'1',
      name:"valid_name",
      place:"http://place.com"
    }
    await sut.execute(data);
    expect(createUserRepository.dataId).toEqual(data.id);
  })
  
  it('Should CreateUserUseCase call createUserRepository.findById with id not exists of db its not return user', async () => { 
    const { sut }   = makeSut();
    const data = {
      id:'1',
      name:"valid_name",
      place:"http://place.com"
    }
    const response = await sut.execute(data);
    expect(response).toEqual(undefined);
  })

})

