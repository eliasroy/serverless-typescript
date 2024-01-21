import {UserRepository} from "../entity/user.repository";
import {inject, injectable} from "inversify";
import "reflect-metadata";
@injectable()
export class UserService{
    constructor(
        @inject('USER_REPO')
        private readonly  userRepository:UserRepository){}

    public findAll(){
        return this.userRepository.findAllMock();
    }

    public findById(id: string){
        return this.userRepository.findByIdMock(id);
    }
}