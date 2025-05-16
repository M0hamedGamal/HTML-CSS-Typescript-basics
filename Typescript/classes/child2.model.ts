import {Child1Model} from "./child1.model";

export class Child2Model extends Child1Model {
    child2Prop: string

    static staticProp = 'Static Prop'

    constructor(firstName?: string, lastName?: string) {
        super(firstName, lastName);

        this.child2Prop = 'Chi2'
    }

    static staticFn = () => {
        return 'Static Function'
    }
}