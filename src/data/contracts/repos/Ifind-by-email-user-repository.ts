import { UserDTO } from "@/data/contracts/dtos";
import { Either } from "@/shared/error-handler/either";

export interface IfindByEmailUserRepository {
  findById: (id:string) => Promise<Either<undefined | null , UserDTO>>;
}
