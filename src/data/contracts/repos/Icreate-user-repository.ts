export interface IcreateUserRepository {
  add: (dataReceivedOfUser:UserDTO) => Promise<void>;
  findById: (id:string) => Promise<UserDTO | any>;
}
