export interface IPerson {
    firstName: string,
    lastName: string,
    ageFn: (age: number) => string
}