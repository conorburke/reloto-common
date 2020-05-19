export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message)

        // next line due to TS requirement
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): {message: string, field?: string}[];
}