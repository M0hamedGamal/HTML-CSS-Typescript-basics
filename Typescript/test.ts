//#region greeter function
/**
 * @param name This is a name of user
 */
function greeter(name: string) {
    return `Hello ${name}`
}

greeter('username')
//#endregion

//#region Built-in Types
const num: number = 20
const username: string = 'Gemy'
const isTrue: boolean = true
const obj: object = {id: 2}
const arr: string[] = ['item1']
//#endregion

//#region User Types
class Student {
}

const std1: Student = new Student()

interface Flyable {
}

let isFlyable: Flyable
//#endregion

//#region Multiple Types
let numOrBool: number | boolean
numOrBool = 40
numOrBool = false
//#endregion

//#region Any Types
let changing: any = 'This is a string'
changing = 40
changing = {}
changing = []
//#endregion

//#region Return Types
const returnName = (name: string): string => {
    return name
}
const printName = (name: string): void => {
    console.log(name)
}

console.log(returnName('Mohamed'))
printName('Gamal')
//#endregion

//#region Return Generic Types
const returnGeneric = <T>(arg: T): T => {
    return arg
}

console.log(returnGeneric<string>('Mohamed'))
console.log(returnGeneric<number>(29))
//#endregion

//#region Enum
enum localColor { red = "red", green = "green", blue = "blue" }

const printColor = (c: localColor) => {
    switch (c) {
        case 'red':
            console.log('This is a red color')
            break
    }
}

const color: localColor = localColor.red
printColor(color)
//#endregion

//#region Interface
import {IPerson} from "./interfaces/person.interface";
import {IEmployee} from "./interfaces/employee.interface";

const person: IPerson = {
    firstName: 'Mohamed',
    lastName: 'Gemy',
    ageFn: (age) => `Hello Mohamed. Your age is ${age}`
}

console.log(person.ageFn(29))

const emp: IEmployee = {
    firstName: 'Ahmed',
    lastName: 'Ali',
    ageFn: (age) => `${age}`,
    salary: 40
}

console.log(emp.salary)
//#endregion

//#region Class
import {Car} from "./classes/car.model";
import {Color} from "./enums/color.enum";

const hundai: Car = new Car(Color.black)
console.log(hundai.getSpeed())
//#endregion

//#region Practice extends classes and implements interfaces
import {ParentModel} from "./classes/parent.model";
import {Child1Model} from "./classes/child1.model";
import {Child2Model} from "./classes/child2.model";

const child2: Child2Model = new Child2Model('Mohamed')

console.log(child2.firstName)
console.log(child2.lastName)
console.log(child2.child2Prop)
console.log(Child2Model.staticProp)
console.log(Child2Model.staticFn())
//#endregion
