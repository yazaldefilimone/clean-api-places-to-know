
class CreateUserUseCase{
  name:string = '';
  place:string = '';
  async execute(dataReceivedOfParamsUser:UserDTO):Promise<void>{
    this.name = dataReceivedOfParamsUser.name
    this.place = dataReceivedOfParamsUser.place
  }
}

type UserDTO ={
  name:string;
  place:string;
}

describe("CreateUserUseCase", () => {

  it('Should CreateUserUseCase receive correct name and place when call execute', async () => { 
    const sut  = new CreateUserUseCase();
    const data = {
      name:"valid_name",
      place:"http://place.com"
    }

    await sut.execute(data);
    expect(sut.name).toEqual(data.name)
    expect(sut.place).toEqual(data.place)
  })
})

