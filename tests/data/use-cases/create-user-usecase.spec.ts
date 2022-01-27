
class CreateUserUseCase{
  name:string = '';
  place:string = '';
  constructor(private readonly createUserRepository:IcreateUserRepository){}

  async execute(dataReceivedOfParamsUser:UserDTO):Promise<void>{
    this.name = dataReceivedOfParamsUser.name
    this.place = dataReceivedOfParamsUser.place
    this.createUserRepository.findById(dataReceivedOfParamsUser.id as string);
  }
}

type UserDTO ={
  id?:string;
  name:string;
  place:string;
}

interface IcreateUserRepository {
  add: (dataReceivedOfUser:UserDTO) => Promise<void>;
  findById: (id:string) => Promise<void>;
}

class CreateUserRepositorySpy implements IcreateUserRepository{
  dataAdd = {} as UserDTO;
  dataId:string = '';

  async add(dataReceivedOfUser:UserDTO):Promise<void>{
    this.dataAdd = dataReceivedOfUser;
  }

  async findById(id:string):Promise<void>{
    this.dataId = id
  }
}

describe("CreateUserUseCase", () => {

  it('Should CreateUserUseCase receive correct name and place when call execute', async () => { 
    const createUserRepository = new CreateUserRepositorySpy()
    const sut  = new CreateUserUseCase(createUserRepository);
    const data = {
      name:"valid_name",
      place:"http://place.com"
    }
    await sut.execute(data);
    expect(sut.name).toEqual(data.name);
    expect(sut.place).toEqual(data.place);
  })
  
  it('Should CreateUserUseCase call createUserRepository.findById with correct id', async () => { 
    const createUserRepository = new CreateUserRepositorySpy()
    const sut  = new CreateUserUseCase(createUserRepository);
    const data = {
      id:'1',
      name:"valid_name",
      place:"http://place.com"
    }
    await sut.execute(data);
    expect(createUserRepository.dataId).toEqual(data.id);
  })

})

