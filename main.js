"use strict";
// developed by microsoft and typed superset of javascript converts into plain javascript
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hello world";
console.log(message);
//variables declarations
// let -can be done without intilazation
// const require intilization and cannot be reassign
var x;
var y = 20;
x = 30;
console.log(x + y);
// variable types
// syntax to write variable is assign : datatype after variable name
var isAssigned = 0;
var name = "shravan";
//to append a string we can use this syntax
var output = "my name is ".concat(name, " and iam SE");
console.log(output);
// by this variable type we can prevent making mistakes by static typechecking in code itself
// typescript is also one reason for accurate intellisense means suggesting the methods/functions regarding to variable name like example "name.concate"
// subtypes of all other types
var names = null;
var u = undefined;
// we can assign this to string and numbers
//example
// let isNew:boolean=null;
// let myName:string=undefined;
//array declaration
var array = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4];
var Variable = [20, "shravan"]; // order must be same
console.log("tuple" + Variable);
//An enum is a special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric .
var color;
(function (color) {
  color[(color["red"] = 5)] = "red";
  color[(color["blue"] = 6)] = "blue";
  color[(color["green"] = 7)] = "green";
})(color || (color = {})); // default is 0 and we can initiliaze starting number like 5,6,7
var c = color.green;
console.log(c + "enum");
//any vs unknown
// unknown we connot call a method or declare
//any we can declare
var username = "shravan";
username = true;
username = 1;
//type assertion/ typecasting--refer
// let usernameunknown: unknown = 10;
// function hasName(obj: any): obj is { name: string } {
//   return !!obj && typeof obj === "object" && "name" in obj;
// }
// if (hasName(usernameunknown)) {
//   console.log(usernameunknown.name);
// }
// (usernameunknown as string).toUpperCase();
// type inference
// if varaible intiliazed on declaration then type infernce will not work default
var a;
a = 2;
a = true;
// but when we intiliaze with default value will be taken
var z = 2;
// z=true;Type 'boolean' is not assignable to type 'number'.
var number;
number = true;
number = 2;
// union is used instead of any because easy to intellicense and get the exact data type
//functions
function add(n1, n2) {
  if (n2) {
    return n1 + n2;
  } else return n1;
}
console.log(add(5, 6));
console.log(add(5)); // optional calling in default parameter result is 15
function fullname(person) {
  console.log("".concat(person.name, " and ").concat(person.lastname));
}
var p = {
  name: "shravan",
  lastname: "herekar",
};
fullname(p);
//class based inheritance
//same as java or c#
var employee = /** @class */ (function () {
  function employee(name) {
    this.employeeName = name; //constructor to intilliaze name
  }
  employee.prototype.greet = function () {
    console.log("good morning ".concat(this.employeeName));
  };
  return employee;
})();
//creating instance
var emp1 = new employee("shravan inhertiance");
console.log(emp1.employeeName);
emp1.greet();
//inheritance class
var manager = /** @class */ (function (_super) {
  __extends(manager, _super);

  function manager(managername) {
    return _super.call(this, managername) || this;
  }
  manager.prototype.delegatingwork = function () {
    console.log("manager work is delegating ");
  };
  return manager;
})(employee);
var emp2 = new manager("bruce");
emp2.delegatingwork();
emp2.greet();
console.log(emp2.employeeName);
// access modifiers
//private cant be accesed by out of class
// protected within derived class we can out side of it we cannot and within class
