const str = 'one.two.three.four.five';

function createObjectFromString(str) {
	if(str.length === 0) return {};

	const arr = typeof str === 'object'? str : str.split('.'); 

	const [key, ...keys] = arr;

	return {
		[key]: createObjectFromString(keys)
	}
}

console.log(createObjectFromString(str));