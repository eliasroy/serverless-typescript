import{findAllMock} from "../mock/find.all.mock"

export class UserRepository{
    public findAllMock():typeof findAllMock{
        return findAllMock
    }
    public findByIdMock(useId:string):typeof findAllMock[0]{
        return findAllMock.find(({id})=>id===+useId);
    }
}