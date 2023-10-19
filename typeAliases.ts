// * ----------------------------------------------------------------

// * Use TYPE ALIASES when args of Destructured Object is too long
// * good for reusable types
// * https://www.digitalocean.com/community/tutorials/typescript-type-alias, https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
let functionWithDestructuredObject = (user: {
	username: string;
	age: number;
	phone?: string;
}) => {
	console.log(user.username);
};

// * TYPE ALIASES, now we can use this type everywhere
type UserType = {
	username: string;
	age: number;
	phone?: string;
};

const userObject: UserType = {
	username: 'jerry',
	// age: "23" this won't work as only number is accepted
	age: 23
	// phone: 20 this is optional
};

// * Example
let functionWithDestructuredObject2 = ({ username, age }: UserType) => {
	console.log(username, age);
	// console.log(user.data) data is not defined in UserType
};
functionWithDestructuredObject2(userObject);

// * TYPE ALIASES, with theme

type UserType2 = {
	username: string;
	age: number;
	phone?: string;
	theme: 'dark' | 'light';
};

const userWithTheme: UserType2 = {
	username: 'apple',
	age: 20,
	// phone?: string,
	// theme: 'pink', this won't work as only 'dark' or 'light' is accepted
	theme: 'light'
};

console.log(userWithTheme);

// * ----------------------------------------------------------------
