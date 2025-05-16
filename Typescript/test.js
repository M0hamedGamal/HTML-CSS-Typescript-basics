"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//#region greeter function
/**
 * @param name This is a name of user
 */
function greeter(name) {
    return "Hello ".concat(name);
}
greeter('username');
//#endregion
//#region Built-in Types
var num = 20;
var username = 'Gemy';
var isTrue = true;
var obj = { id: 2 };
var arr = ['item1'];
//#endregion
//#region User Types
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var std1 = new Student();
var isFlyable;
//#endregion
//#region Multiple Types
var numOrBool;
numOrBool = 40;
numOrBool = false;
//#endregion
//#region Any Types
var changing = 'This is a string';
changing = 40;
changing = {};
changing = [];
//#endregion
//#region Return Types
var returnName = function (name) {
    return name;
};
var printName = function (name) {
    console.log(name);
};
console.log(returnName('Mohamed'));
printName('Gamal');
//#endregion
//#region Return Generic Types
var returnGeneric = function (arg) {
    return arg;
};
console.log(returnGeneric('Mohamed'));
console.log(returnGeneric(29));
//#endregion
//#region Enum
var localColor;
(function (localColor) {
    localColor["red"] = "red";
    localColor["green"] = "green";
    localColor["blue"] = "blue";
})(localColor || (localColor = {}));
var printColor = function (c) {
    switch (c) {
        case 'red':
            console.log('This is a red color');
            break;
    }
};
var color = localColor.red;
printColor(color);
var person = {
    firstName: 'Mohamed',
    lastName: 'Gemy',
    ageFn: function (age) { return "Hello Mohamed. Your age is ".concat(age); }
};
console.log(person.ageFn(29));
var emp = {
    firstName: 'Ahmed',
    lastName: 'Ali',
    ageFn: function (age) { return "".concat(age); },
    salary: 40
};
console.log(emp.salary);
//#endregion
//#region Class
var car_model_1 = require("./classes/car.model");
var color_enum_1 = require("./enums/color.enum");
var hundai = new car_model_1.Car(color_enum_1.Color.black);
console.log(hundai.getSpeed());
var child2_model_1 = require("./classes/child2.model");
var child2 = new child2_model_1.Child2Model('Mohamed');
console.log(child2.firstName);
console.log(child2.lastName);
console.log(child2.child2Prop);
console.log(child2_model_1.Child2Model.staticProp);
console.log(child2_model_1.Child2Model.staticFn());
//#endregion
