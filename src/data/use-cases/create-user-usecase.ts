import { UserDTO } from "@/data/contracts/dtos";
import { IcreateUserRepository } from "@/data/contracts/repos";

export class CreateUserUseCase{
  name:string = '';
  place:string = '';
  constructor(private readonly createUserRepository:IcreateUserRepository){}

  async execute(dataReceivedOfParamsUser:UserDTO):Promise<void>{
    this.name = dataReceivedOfParamsUser.name
    this.place = dataReceivedOfParamsUser.place
    const resultOfRepositoryOfFindId = await this.createUserRepository.findById(dataReceivedOfParamsUser.id as string);
    if(resultOfRepositoryOfFindId){
      return resultOfRepositoryOfFindId;
    }

    const resultOfRepositoryOfAdd = await this.createUserRepository.add(dataReceivedOfParamsUser);

    return resultOfRepositoryOfAdd;
  }
}
