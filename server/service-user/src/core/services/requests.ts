import axios from "axios";

class Requests {

    registrationMail(data: object): void{
        axios.post('http://localhost:3001/api/mail/registration', data)
            .then(res => res)
            .catch(err => {
                return err
            })
    }

}

export default new Requests();