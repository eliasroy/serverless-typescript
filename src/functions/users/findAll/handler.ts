import { formatJSONResponse } from '@libs/api-gateway';
import {UserService} from "../../../users/services/UserService";
import {containeer} from "../../../config/inversify.config";

export const main = async ()=>{
    try{
        const userService= containeer.get(UserService);
        return formatJSONResponse({
            result: userService.findAll(),
        });
    }catch(error){
        return formatJSONResponse({
            error:error.message,
        });
    }
};
