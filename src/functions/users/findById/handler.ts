import { formatJSONResponse } from '@libs/api-gateway';
import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {UserService} from "../../../users/services/UserService";
import {UserRepository} from "../../../users/entity/user.repository";

export const main = async (event:APIGatewayProxyEvent,_context:Context) => {
try{
    //const {name} = JSON.parse(event.body) as {name:string};
    const{id}=event.pathParameters;
    const userService= new UserService(new UserRepository());
    return formatJSONResponse({
        result: userService.findById(id),
    });
}catch(error){
    return formatJSONResponse({
        error:error.message,
    });

}
};
