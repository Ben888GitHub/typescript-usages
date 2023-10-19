// * ----------------------------------------------------------------

// * INTERFACES
// * similar to TYPE, but it only accept object types

interface IUser {
	username: string;
	email: string;
	age: number;
	phone?: string;
}

// * it has everything the IUser interface has
interface IEmployee extends IUser {
	employeeId: number;
}

// * you must also include username, email, age because IEmployees is now dependant to IUser
const emp: IEmployee = {
	employeeId: 1,
	username: 'jacken',
	email: 'jacken@gmail.com',
	age: 23
};

// * employeeId is not usable here
const userProfile: IUser = {
	username: 'unemployed',
	email: 'unemployed@dd',
	age: 20
	// employeeId: 1, error because IUser doesn't have employeeId
};

console.log(emp);

// * https://www.w3schools.com/typescript/trytypescript.php?filename=demo_aliases_interfaces_extended
