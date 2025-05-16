import {ParentModel} from "./parent.model";
import {IBase} from "../interfaces/base.interface";

export class Child1Model extends ParentModel implements IBase {
    child1Prop: string
    firstName: string
    lastName: string

    constructor(firstName?: string, lastName? : string) {
        super();
        this.firstName = firstName
        this.lastName = lastName
        this.child1Prop = 'Chi1'
    }

    getType = (): { msg: string } => ({
        msg: "Method not implemented."
    })
}