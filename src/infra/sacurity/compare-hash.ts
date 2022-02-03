import { ICompareHash } from '@/data/contracts/sacurity'


import bcrypt from 'bcryptjs';

export class CompareHash implements ICompareHash{
  async compare({ password, passwordHashed }:ICompareHash.Input):Promise<boolean>{
    const isValid = await bcrypt.compare(password, passwordHashed);


    return isValid
  }
}
