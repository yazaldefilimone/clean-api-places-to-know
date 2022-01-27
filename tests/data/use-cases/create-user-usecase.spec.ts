
class CreateUserUseCase{
  name:string = '';
  place:string = '';
  constructor(private readonly createUserRepository:IcreateUserRepository){}

  async execute(dataReceivedOfParamsUser:UserDTO):Promise<void>{
    this.name = dataReceivedOfParamsUser.name
    this.place = dataReceivedOfParamsUser.place
    const resultOfRepositoryOfFindId = await this.createUserRepository.findById(dataReceivedOfParamsUser.id as string);
    return resultOfRepositoryOfFindId;
  }
}

type UserDTO ={
  id?:string;
  name:string;
  place:string;
}

interface IcreateUserRepository {
  add: (dataReceivedOfUser:UserDTO) => Promise<void>;
  findById: (id:string) => Promise<UserDTO | any>;
}

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
