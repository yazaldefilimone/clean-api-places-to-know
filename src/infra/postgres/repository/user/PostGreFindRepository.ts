import { EntityRepository, Repository } from "typeorm";
import { User } from "@/infra/postgres/entities";
import { IPostGreFindRepository } from "@/infra/helpers/repos";


@EntityRepository(User)
export class PostGreFindRepository extends Repository<User> implements IPostGreFindRepository{

}
