import { EntityRepository, Repository } from "typeorm";
import { Place } from "@/infra/postgres/entities";
import { IPostGreFindRepository } from "@/infra/helpers/repos/place";


@EntityRepository(Place)
export class PostGreFindRepository extends Repository<Place> implements IPostGreFindRepository{}
