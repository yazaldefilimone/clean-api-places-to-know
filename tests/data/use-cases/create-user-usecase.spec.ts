
class CreateUserUseCase{
  name:string = '';
  async execute(dataReceivedOfParamsUser:UserDTO):Promise<void>{
    this.name = dataReceivedOfParamsUser.name
  }
}

type UserDTO ={
  name:string;
  place:string;
}

describe("CreateUserUseCase", () => {

  it('Should CreateUserUseCase receive correct params', async () => { 
    const sut  = new CreateUserUseCase();
    const data = {
      name:"valid_name",
      place:"http://place.com"
    }

    await sut.execute(data);
    expect(sut.name).toEqual(data.name)

  })
})

