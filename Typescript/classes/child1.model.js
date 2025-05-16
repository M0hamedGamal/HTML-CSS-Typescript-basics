"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Child1Model = void 0;
var parent_model_1 = require("./parent.model");
var Child1Model = /** @class */ (function (_super) {
    __extends(Child1Model, _super);
    function Child1Model(firstName, lastName) {
        var _this = _super.call(this) || this;
        _this.getType = function () { return ({
            msg: "Method not implemented."
        }); };
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.child1Prop = 'Chi1';
        return _this;
    }
    return Child1Model;
}(parent_model_1.ParentModel));
exports.Child1Model = Child1Model;
