import { ICreateHash } from "@/data/contracts/sacurity"


import bcrypt from "bcryptjs";


export class CreateHash implements ICreateHash{
  async create({ password , salt = 8}: ICreateHash.Input):Promise<string>{
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }
}
