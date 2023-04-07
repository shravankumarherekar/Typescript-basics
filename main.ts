// developed by microsoft and typed superset of javascript converts into plain javascript

//optional static typing and type inference

// typescript takes file default as script to make them module write import/export at start

// module has own scope where script shares global scope

// whenever we do changes in tsc file it will refelct directly in js file this is how it works (ts to js transfile )

// tsc main --watch it will monitor the file

// typescript let , const mostly used

// js only gobal scope,function scope

// --variable declarations

// let -can be done without intilazation
// const require intilization and cannot be reassign

export {}; // must to be make this as a module file
let message = "hello world";
console.log(message);

//variables declarations
// let -can be done without intilazation
// const require intilization and cannot be reassign

let x;
const y = 20;
x = 30;
console.log(x + y);

// variable types
// syntax to write variable is assign : datatype after variable name

let isAssigned: number = 0;
let name: string = "shravan";

//to append a string we can use this syntax
let output: string = `my name is ${name} and iam SE`;
console.log(output);

// by this variable type we can prevent making mistakes by static typechecking in code itself
// typescript is also one reason for accurate intellisense means suggesting the methods/functions regarding to variable name like example "name.concate"
// subtypes of all other types
let names: null = null;
let u: undefined = undefined;

// we can assign this to string and numbers
//example
// let isNew:boolean=null;
// let myName:string=undefined;

//array declaration

let array: number[] = [1, 2, 3, 4];
let array2: Array<number> = [1, 2, 3, 4];

let Variable: [number, string] = [20, "shravan"]; // order must be same

console.log("tuple" + Variable);

//An enum is a special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric .
enum color {
  red = 5,
  blue,
  green,
} // default is 0 and we can initiliaze starting number like 5,6,7

let c: number = color.green;
console.log(c + "enum");

//any vs unknown
// unknown we connot call a method or declare
//any we can declare

let username: any = "shravan";
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

let a;
a = 2;
a = true;

// but when we intiliaze with default value will be taken

let z = 2;
// z=true;Type 'boolean' is not assignable to type 'number'.

let number: number | boolean;
number = true;
number = 2;
// union is used instead of any because easy to intellicense and get the exact data type

//functions
function add(n1: number, n2?: number): number {
  if (n2) {
    return n1 + n2;
  } else return n1;
}
console.log(add(5, 6));
console.log(add(5)); // optional calling in default parameter result is 15
//optional parameter when u add ? in parameter but only condition is to write operational operator after required operator in odering of function while writing functions
//function add(n1: number, n2: number=10): number //if the n2 not passed it will take default parameter as 10

// interfaces
//they are used to look as clean code as declaring varibales types in functions is look not good so we will take help of interfaces
interface Person {
  name: string;
  lastname?: string; //means optional
}

function fullname(person: Person) {
  console.log(`${person.name} and ${person.lastname}`);
}
let p = {
  name: "shravan",
  lastname: "herekar",
};
fullname(p);

//class based inheritance
//same as java or c#

class employee {
  public employeeName: string; //variable type or a property and default public AM
  constructor(name: string) {
    this.employeeName = name; //constructor to intilliaze name
  }
  greet() {
    console.log(`good morning ${this.employeeName}`);
  }
}
//creating instance
let emp1 = new employee("shravan inhertiance");
console.log(emp1.employeeName);
emp1.greet();

//inheritance class
class manager extends employee {
  constructor(managername: string) {
    super(managername); // we use super keyword to intialize base class employee keyword basically it calls employye name constructor
  }
  delegatingwork() {
    console.log(`manager work is delegating `);
  }
}
let emp2 = new manager("bruce");
emp2.delegatingwork();
emp2.greet();
console.log(emp2.employeeName);

// access modifiers

//private cant be accesed by out of class
// protected within derived class we can out side of it we cannot and within class
