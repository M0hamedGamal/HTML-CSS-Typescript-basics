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
exports.Child2Model = void 0;
var child1_model_1 = require("./child1.model");
var Child2Model = /** @class */ (function (_super) {
    __extends(Child2Model, _super);
    function Child2Model(firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.child2Prop = 'Chi2';
        return _this;
    }
    Child2Model.staticProp = 'Static Prop';
    Child2Model.staticFn = function () {
        return 'Static Function';
    };
    return Child2Model;
}(child1_model_1.Child1Model));
exports.Child2Model = Child2Model;
