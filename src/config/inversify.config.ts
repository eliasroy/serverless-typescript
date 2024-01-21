import {Container} from "inversify";
import {UserService} from "../users/services/UserService";
import {UserRepository} from "../users/entity/user.repository";

const containeer = new Container();

containeer.bind<UserService>(UserService).to(UserService);
containeer.bind<UserRepository>('USER_REPO').to(UserRepository);

export {containeer};