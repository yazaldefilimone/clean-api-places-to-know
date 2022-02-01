import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlace1643684617484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'places',
                columns:[
                  {
                      name:'id',
                      type:'uuid',
                      isPrimary:true,
                  },
                  {
                      name:'name',
                      type:'varchar',
                  },
                  {
                      name:'place',
                      type:'varchar',
                      isUnique:true
                  },
                  {
                      name:'created_at',
                      type:'timestamp',
                      default: 'now()'
                  }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('places')
    }

}
