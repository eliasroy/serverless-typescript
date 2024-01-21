import { formatJSONResponse } from '@libs/api-gateway';
import {APIGatewayProxyEvent, Context} from "aws-lambda";
import {UserService} from "../../../users/services/UserService";
import {containeer} from "../../../config/inversify.config";

export const main = async (event:APIGatewayProxyEvent,_context:Context) => {
try{
    const{id}=event.pathParameters;
    const userService= containeer.get(UserService);
    return formatJSONResponse({
        result: userService.findById(id),
    });
}catch(error){
    return formatJSONResponse({
        error:error.message,
    });

}
};
