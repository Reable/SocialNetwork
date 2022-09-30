import axios from "axios";
import type {IUser} from "../helpers/User/interface";

class Requests {

    passwordRecovery(data: IUser): void{
        axios.post('http://localhost:3001/api/mail/passwordRecovery', data)
            .then(res => res)
            .catch(err => {
                return err
            })
    }

    registrationMail(data: object): void{
        axios.post('http://localhost:3001/api/mail/registration', data)
            .then(res => res)
            .catch(err => {
                return err
            })
    }

}

export default new Requests();