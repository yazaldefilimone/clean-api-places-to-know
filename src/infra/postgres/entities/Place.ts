import { Column, Entity, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";


@Entity('places')
export class Place {
  @PrimaryColumn()
  readonly id:string

  @Column()
  name:string

  @Column()
  place:string

  @CreateDateColumn()
  created_at:Date

  constructor(){
    if(!this.id){
      this.id = v4()
    }
  }

}
