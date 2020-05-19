import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
    //update to 401, was 400
    statusCode = 401;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [{
            message: this.message
        }]
    }
}