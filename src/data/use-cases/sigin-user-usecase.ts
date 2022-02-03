import { ISigInUserUseCase } from "@/domain/use-cases/user";
import { TokenOfUserDTO, UserDTO } from "@/data/contracts/dtos";
import { IfindByEmailUserRepository } from "@/data/contracts/repos";
import { Either, left, right } from '@/shared/error-handler/either'

import { ICompareHash, ICreateJWt } from "@/data/contracts/sacurity"
import { InvalidParams, NotFound } from "@/domain/erros"

export class SigInUserUseCase  implements ISigInUserUseCase{
  constructor(
    private readonly findByEmailUserRepository:IfindByEmailUserRepository,
    private readonly createJWT:ICreateJWt,
    private readonly compareHash:ICompareHash
  ){}

  async execute({ email, password }: UserDTO): Promise<Either<InvalidParams | NotFound, TokenOfUserDTO>>{

    const UserOrError = await this.findByEmailUserRepository.findByEmail({ email });

    if(UserOrError.isLeft()){
      return left(new NotFound('user'))
    }

    const passwordHashed = UserOrError.value?.password as string

    const isValid = await this.compareHash.compare({ password, passwordHashed})

    if(!isValid){
      return left(new InvalidParams('password')) 
    }

    const payload = {
      id:UserOrError.value?.id as string
    }

    const token = this.createJWT.create({ payload })

   const user = {
     user:{
       id:UserOrError.value?.id as string,
       name:UserOrError.value?.name as string,
       email:UserOrError.value?.email as   string
     },
     token
    }

    return right(user)
  }
}
