import joi from 'joi';
import {ValidationError} from '../Errors';

class Validator{

    private _schema = {};

    static TYPES = joi;

    setRules(name:string, rule: object): void{
        this._schema[name] = rule;
    }

    validate(data: object): void{
        const schema = joi.object(this._schema);
        try {
            joi.assert(data, schema, { abortEarly: false })
        } catch (err: any){
            const message = err.details.map(elem => elem.message);
            throw new ValidationError(message);
        }
    }

}

export default Validator;