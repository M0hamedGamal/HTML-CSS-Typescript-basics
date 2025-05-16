"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(color) {
        this.color = color;
    }
    Car.prototype.getSpeed = function () {
        return 200;
    };
    return Car;
}());
exports.Car = Car;
