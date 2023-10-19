// * https://code.visualstudio.com/docs/typescript/typescript-tutorial

let variable = 'hello';

// variable = 0 or variable = true will get an error, because it's a strict string
variable = 'hi';

let age = 18;

let ageWithType: number;

ageWithType = 20;

let choiceWithType: boolean;

choiceWithType = true;

let textWithType: string = 'First name';

console.log(textWithType);

// * Multiple Types Variable

// Union type
let testStringOrNumber: string | number;

testStringOrNumber = 'text';
testStringOrNumber = 20;

// * Array
let names = ['john', 'james', 'tom'];
// names.push(true) error, as only string is accepted
names.push('ass');

let numberArray: number[];

// numberArray = ["one", "two"] error
numberArray = [10, 20, 30];

// Union type Array
let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [10, 20, '30'];

let testStringOrNumberOrBooleanArray: (string | number | boolean)[];
testStringOrNumberOrBooleanArray = [10, '20', true];

// * Objects

let user = {
	username: 'john',
	age: 22,
	isAdmin: false
};
// user.username = 1 error
user.username = '1';

let userObj: {
	username: string;
	age: number;
	isAdmin: boolean;
};

userObj = {
	username: '20',
	age: 20,
	isAdmin: false
};

let userObjWithCondition: {
	username: string;
	age: number;
	isAdmin: boolean;
	phone?: string;
};

userObjWithCondition = {
	username: 'string',
	age: 20,
	isAdmin: false
	// phone: "dd", it still works because it's an  optional key
};

// * Array of Objects
// * https://www.educba.com/typescript-array-of-objects/
// * https://www.tutorialspoint.com/how-to-create-an-array-of-objects-in-typescript
let employees: { emp_id: number; emp_name: string; emp_desg: string }[] = [];

employees.push(
	{
		emp_id: 20,
		emp_name: 'Ken',
		emp_desg: 'hey'
	},
	{
		emp_id: 21,
		emp_name: 'Kenny',
		emp_desg: 'heyes'
	}
);

// * Functions
let executeCodes = () => {
	console.log('Hey');
};

// Function return string
let funcReturnString = (): string => {
	console.log('');
	return 'hey'; // * without return string value, then it won't work. It should have a return statement and it must be string
};

// Function with multiple argument type
let multiplyNumber = (num: number): number => {
	// console.log()
	return num * 2;
};
multiplyNumber(2);

// Void function where return is restricted
let voidFunction = (): void => {};

// Multiple required args and one optional arg with ?
let sumNumbers = (num1: number, num2: number, another?: number) => {
	return num1 + num2;
};
sumNumbers(2, 3);
