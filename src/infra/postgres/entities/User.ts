
import { Column, Entity, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";


@Entity('users')
export class User {
  @PrimaryColumn()
  readonly id:string

  @Column()
  name:string

  @Column()
  email:string

  @Column()
  password:string

  @CreateDateColumn()
  created_at?:Date

  constructor(){
    if(!this.id){
      this.id = v4()
    }
  }

}
