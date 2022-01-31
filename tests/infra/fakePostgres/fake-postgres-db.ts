import { UserDTO } from "../../../src/data/contracts/dtos"

import { IcreateUserRepository } from "../../../src/data/contracts/repos"

export class CreateUserRepositorySpy implements IcreateUserRepository{
  dataAdd = [{ id:"1", name:"moz", place:"http://place.com", created_at:'2022-01-27T17:36:47.547Z' }] as Array<UserDTO>;
  dataId:string = '';
  callMethodAddCount:number = 0;

  async add(dataReceivedOfUser:UserDTO):Promise<UserDTO>{
    this.callMethodAddCount++;
    this.dataAdd.push(dataReceivedOfUser);
    return {
      ...dataReceivedOfUser,
      created_at:String(new Date())
    }
  }

  async findById(id:string):Promise<UserDTO | any>{
    this.dataId = id
    const result = this.dataAdd.find(value => value.id === id);
    return result;
  }
}

