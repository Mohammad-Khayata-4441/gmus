import { Entity , Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @Column()
    userName:string

    @PrimaryGeneratedColumn('uuid')
    id:string





}