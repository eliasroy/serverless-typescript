import { formatJSONResponse } from '@libs/api-gateway';
import {APIGatewayProxyEvent, Context} from "aws-lambda";

const main = async (event:APIGatewayProxyEvent,context:Context) => {
    try{
        const {name} = JSON.parse(event.body) as {name:string};
        const {awsRequestId} = context;
        return formatJSONResponse({
            message: `Hello ${name}, welcome to the exciting Serverless world!`,
            awsRequestId,
        });
    }catch(error){
        return formatJSONResponse({
            error:error.message,
        });

    }
};

export default main;
