import { CreateUserUseCase } from "@/data/use-cases";
import { UserDTO } from "@/data/contracts/dtos";
import { IcreateUserRepository } from "@/data/contracts/repos";

class CreateUserRepositorySpy implements IcreateUserRepository{

  dataAdd = [{ id:"1", name:"moz", place:"http://place.com", created_at:"1726288119293" }] as Array<UserDTO>;
  dataId:string = '';
  callMethodAddCount:number = 0;

  async add(dataReceivedOfUser:UserDTO):Promise<UserDTO>{
    this.callMethodAddCount++;
    this.dataAdd.push(dataReceivedOfUser);
    return {
      ...dataReceivedOfUser,
      created_at:new Date()
    }
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

  it('Espero que CreateUserUseCase vai receber corretamente os dados passados.', async () => { 
    const { sut }   = makeSut();
    const data = {
      name:"any_name",
      place:"any_place"
    }
    await sut.execute(data);
    expect(sut.name).toEqual(data.name);
    expect(sut.place).toEqual(data.place);
  })
  
  it('Espero que o CreateUserUseCase vai chamar o createUserRepository.findById com id correcto.', async () => { 
    const { sut, createUserRepository }   = makeSut();
    const data = {
      id:'any_id',
      name:"any_name",
      place:"any_place"
    }
    await sut.execute(data);
    expect(createUserRepository.dataId).toEqual(data.id);
  })
  
  it('Espero que Quando chamar o createUserRepository.findById com o id que nao existe do banco dados ele nao retorne nada', async () => { 
    const { sut }   = makeSut();
    const data = {
      id:'any_id',
      name:"any_name",
      place:"any_place"
    }
   const result =  await sut.execute(data);
    expect(result).toHaveProperty('created_at'); 
  })
  
  it('Espero que Quando chamar o createUserRepository.findById com o id que  existe do banco dados ele retorne o user', async () => { 
    const { sut }   = makeSut();
    const data = {
      id:'1',
      name:"moz",
      place:"http://place.com",
      created_at: '1726288119293'
    }

   const result =  await sut.execute(data);
    expect(result).toEqual(data)
  })  
 it('Espero que Quando chamar o createUserRepository.findById e nao retornar  o user ele vai chamar o createUserRepository.add', async () => { 
    const { sut, createUserRepository }   = makeSut();
    const data = {
      id:'2',
      name:"moz",
      place:"http://place.com"
    }
    await sut.execute(data);

    expect(createUserRepository.callMethodAddCount).toBe(1); 
  })
 
  it('Espero que Quando chamar o createUserRepository.findById com o id que nao existe o createUserRepository.add vai retornar um novo usuario', async () => { 
    const { sut }  = makeSut();
    const data = {
      id:'2',
      name:"moz",
      place:"http://place.com"
    }
   const result =  await sut.execute(data);

    expect(result).toHaveProperty('created_at'); 
  })

})

