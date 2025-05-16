import {Color} from "../enums/color.enum";

export class Car {
    color: Color

    constructor(color: Color) {
        this.color = color
    }

    getSpeed(): number {
        return 200
    }
}