class ServiceError extends Error {

    status;
    code;
    data;

    constructor(_status, _code, _message, _data = null) {
        super();
        this.status = _status;
        this.code = _code;
        this.message = _message;
        this.data = _data;
    }

    toResponse() {
        const returnData:any = {
            result: false,
            error: {
                code: this.code,
                message: this.message
            }
        };

        if(this.data){
            returnData.error.data = this.data;
        }

        return returnData;
    }

    toJSON() {
        const response = this.toResponse();

        return JSON.stringify(response);
    }
}

class BadRequestError extends ServiceError {
    static STATUS = 400;
    static STATUS_TEXT = 'Bad Request';
    static CODE = 'BAD_REQUEST';

    constructor(_data: any = null, _code = BadRequestError.CODE, _message = BadRequestError.STATUS_TEXT) {
        super(BadRequestError.STATUS, _code, _message, _data);
    }
}

class UnAuthorized extends ServiceError {
    static STATUS = 401;
    static STATUS_TEXT = 'Unauthorized';
    static CODE = 'UNAUTHORIZED';

    constructor(_data: any = null, _code = UnAuthorized.CODE, _message = UnAuthorized.STATUS_TEXT) {
        super(UnAuthorized.STATUS, _code, _message, _data);
    }
}

class ValidationError extends BadRequestError {
    static override STATUS_TEXT = 'Validation error';
    static override CODE = 'VALIDATION_ERROR';

    constructor(_data: any = null, _code = BadRequestError.CODE, _message = BadRequestError.STATUS_TEXT) {
        super(_data, ValidationError.CODE, ValidationError.STATUS_TEXT);
    }
}

class InvalidCredentials extends BadRequestError {
    static override STATUS_TEXT = 'Invalid credentials';
    static override CODE = 'INVALID_CREDENTIALS';

    constructor(_data: any = null, _code = BadRequestError.CODE, _message = BadRequestError.STATUS_TEXT) {
        super(_data, InvalidCredentials.CODE, InvalidCredentials.STATUS_TEXT);
    }
}

class SessionExpired extends BadRequestError {
    static override STATUS_TEXT = 'Session expired';
    static override CODE = 'SESSION_EXPIRED';

    constructor(_data: any = null, _code = BadRequestError.CODE, _message = BadRequestError.STATUS_TEXT) {
        super(_data, SessionExpired.CODE, SessionExpired.STATUS_TEXT);
    }
}

class InsufficientRole extends UnAuthorized {
    constructor(data = 'User role is insufficient to use this method') {
        super(data);
    }
}

class UserNotFound extends UnAuthorized {
    constructor(data = 'User not found') {
        super(data);
    }
}

class AlreadyExists extends BadRequestError {
    static override STATUS_TEXT = ' already exists';
    static override CODE = 'ALREADY_EXISTS';

    constructor(_data: any = null, _code = BadRequestError.CODE, _message = BadRequestError.STATUS_TEXT) {
        super(_data + AlreadyExists.STATUS_TEXT, AlreadyExists.CODE, SessionExpired.STATUS_TEXT);
    }
}

export {
    ServiceError, BadRequestError, UnAuthorized,
    ValidationError, InvalidCredentials, SessionExpired,
    InsufficientRole, AlreadyExists, UserNotFound
}