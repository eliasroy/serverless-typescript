import { formatJSONResponse } from '@libs/api-gateway';
import {UserService} from "../../../users/services/UserService";
import {UserRepository} from "../../../users/entity/user.repository";

export const main = async ()=>{
    try{
        const userService= new UserService(new UserRepository());

        return formatJSONResponse({
            result: userService.findAll(),
        });
    }catch(error){
        return formatJSONResponse({
            error:error.message,
        });
    }
};
