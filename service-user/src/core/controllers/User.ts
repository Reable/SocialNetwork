import type {DataAuthorization} from "../helpers/interface";


export default class User {
    constructor() {
    }

    async authorization(_data: DataAuthorization, _headers):Promise<string> {
        return 'hello world';
    }
}