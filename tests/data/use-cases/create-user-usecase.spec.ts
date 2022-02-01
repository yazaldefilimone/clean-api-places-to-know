import { IfindByEmailUserRepository, IAddUserRepository } from "@/data/contracts/repos";
import { UserDTO  } from "@/data/contracts/dtos";
import { Either, right, left } from "@/shared/error-handler/either";
import { CreateUserUseCase } from "@/data/use-cases";

const FakeDatabase = {
  dataAdd : [
    {
      id:"1",
      name:"moz",
      email:"any_email", 
      password:'any_password',
      created_at:"2022-01-27T17:36:47.547Z"
    }
  ] as Array<UserDTO>,
  dataId : ''
}

interface IfakeDatabase {
  dataAdd:Array<UserDTO>,
  dataId:string
}
class AddUserRepositorySpy implements IAddUserRepository{
  callMethodAddCount:number = 0;
  constructor(private readonly fakeDatabase:IfakeDatabase){}

  async add(dataReceivedOfUser:UserDTO):Promise<UserDTO>{
    this.callMethodAddCount++;
     let user:UserDTO = {
       ...dataReceivedOfUser,
       created_at: "2022-01-27T17:36:47.547Z"
     }
  
    this.fakeDatabase.dataAdd.push(user)
    return user
  }

}


class FindUserByEmailRepositorySpy implements IfindByEmailUserRepository{  
  callMethodFindCount:number = 0;
  constructor(public readonly fakeDatabase:IfakeDatabase){}

  async findById(id:string):Promise<Either<null | undefined, UserDTO>>{
    this.callMethodFindCount++;
    this.fakeDatabase.dataId = id
    const result = this.fakeDatabase.dataAdd.find(value => value.id === id);

    if(!result){
      left(undefined);
    };

    return right(result as UserDTO)
  }
}


type ISut = {
  sut: CreateUserUseCase;
  addUserRepository:AddUserRepositorySpy;
  findUserByEmailRepository:FindUserByEmailRepositorySpy;
}
const makeSut = ():ISut => {
  const addUserRepository = new AddUserRepositorySpy(FakeDatabase)
  const findUserByEmailRepository = new FindUserByEmailRepositorySpy(FakeDatabase)

  const sut = new CreateUserUseCase(
    addUserRepository,
    findUserByEmailRepository
  );

  return {
    sut,
    addUserRepository,
    findUserByEmailRepository
  }
}

const returnFakeData = ():UserDTO => {
    const data:UserDTO = {
      name:"any_name",
      email:"any_email",
      password:'any_password',
      id:'any_id',
      created_at: "2022-01-27T17:36:47.547Z"
    }
  return  data;
}
describe("CreateUserUseCase", () => {

  it('Espero que CreateUserUseCase vai receber corretamente os dados passados.', async () => { 
    const { sut }   = makeSut();
    const data = returnFakeData()
    await sut.execute(data);
    expect(sut.name).toEqual(data.name);
    expect(sut.email).toEqual(data.email);
  })
  
  it('Espero que o CreateUserUseCase vai chamar o createUserRepository.findById com id correcto.', async () => { 
    const { sut, findUserByEmailRepository }   = makeSut();
    const data = returnFakeData()
    await sut.execute(data);
    expect(findUserByEmailRepository.fakeDatabase.dataId).toEqual(data.id);
  })
  
  it('Espero que Quando chamar o createUserRepository.findById com o id que nao existe do banco dados ele nao retorne nada', async () => { 
    const { sut }   = makeSut();
    const data = returnFakeData()
   const result =  await sut.execute(data);
    expect(result.value).toHaveProperty('created_at'); 
  })
  
  it('Espero que Quando chamar o createUserRepository.findById com o id que  existe do banco dados ele retorne o user', async () => { 
    const { sut }   = makeSut();
    const data = returnFakeData()
   const result =  await sut.execute(data);
    expect(result.value).toEqual(data)
  })  
  it('Espero que Quando chamar o createUserRepository.findById e nao retornar  o user ele vai chamar o createUserRepository.add', async () => { 
    const { sut, findUserByEmailRepository, addUserRepository }   = makeSut();
    const data = returnFakeData()
    await sut.execute(data);

    expect(findUserByEmailRepository.callMethodFindCount).toBe(1); 
    expect(addUserRepository.callMethodAddCount).toBe(1); 
  })
 
  it('Espero que Quando chamar o createUserRepository.findById com o id que nao existe o createUserRepository.add vai retornar um novo usuario', async () => { 
    const { sut }  = makeSut();
    const data = returnFakeData()
   const result =  await sut.execute(data);

    expect(result.value).toHaveProperty('created_at'); 
  })

})
