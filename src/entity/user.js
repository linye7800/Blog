import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class user {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    username = "";

    @Column("varchar")
    password = "";

}
