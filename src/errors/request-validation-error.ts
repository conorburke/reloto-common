import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

// interface CustomError {
//     statusCode: number,
//     serializeErrors(): {
//         message: string,
//         field?: string
//     }[]
// }

export class RequestValidationError extends CustomError {
    statusCode: number = 400;
    constructor(public errors: ValidationError[]) {
        super('Request validation error');

        // next line due to TS requirements
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(e => {
            return {message: e.msg, field: e.param}
        });
    }
}