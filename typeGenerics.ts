// * Generics

// * when fetch api of Posts that contains postUser and postCategory
// * https://www.freecodecamp.org/news/typescript-generics-use-case-example/
// * https://blog.logrocket.com/using-typescript-generics-create-reusable-components/
// * https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript

// * Use to create reusable components or functions that can handle multiple types
// * can dynamically define the type of parameter or function that'll be declared earlier

interface IAuthor {
	id: number;
	username: string;
}

interface ICategory {
	id: number;
	title: string;
}

interface IPost {
	id: number;
	title: string;
	desc: string;
	extra: IAuthor[] | ICategory[]; // array of IAuthor or ICategory multiple objects
}

const postData: IPost = {
	id: 2,
	title: 'individual hacker',
	desc: 'individual hacker is contracted by CIA',
	extra: [
		{
			id: 2,
			username: 'Brandon Williams'
		},
		{
			id: 3,
			username: 'JohnKey'
		}
	]
};

// Retrieving API Example
const getSinglePost = () => {
	console.log(postData);
	console.log(typeof postData); // object
	console.log(postData.extra.length); // 2
};
getSinglePost();

// * Type-safe
// * create reusable components in react
// * dynamically define the Type <T> of parameter or function() that's declared beforehand
// * very handy when wanna use certain reusable pieces of logic, create a functions and declare their own types
// * implement checks at compile time, eliminate type castings
interface IPostBetter<T> {
	id: number;
	title: string;
	desc: string;
	extra: T[]; // this means any data type over here must be inside an array
}

const testMe: IPostBetter<String> = {
	id: 1,
	title: 'post title',
	desc: 'post desc',
	extra: ['str1', 'str2'] // this can only accept an array of strings
};

const testNum: IPostBetter<Number> = {
	id: 1,
	title: 'post title',
	desc: 'post desc',
	extra: [2, 1] // this can only accept an array of numbers
};

// * Add Limitation Generics, where you can't give any string or number or boolean
interface IPostEvenBetter<T extends object> {
	id: number;
	title: string;
	desc: string;
	extra: T[]; // this means any data type over here must be inside an array
}

const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
	id: 1,
	title: 'post title',
	desc: 'post desc',
	extra: [
		{
			id: 1,
			username: 'tramber'
		}
	] // this can only accept an array of strings
};

// * or you can also put other interface here and the data with <T> must be based on the interface
const testMe3: IPostEvenBetter<IAuthor> = {
	id: 1,
	title: 'post title',
	desc: 'post desc',
	extra: [
		{
			id: 1,
			username: 'tramber' // title: "tramber" will give an error as it doesn't exist in IAUthor interface
		}
	] // this can only accept an array of strings
};

const testMe32: IPostBetter<ICategory> = {
	id: 1,
	title: 'post title',
	desc: 'post desc',
	extra: [
		{
			id: 1,
			title: 'tramber' // username: "tramber" will give an error as it doesn't exist in IAUthor interface
		}
	] // this can only accept an array of strings
};

console.log(testMe3);
console.log(testMe32);
