function func(initialValue) {
	
  let result = initialValue;

	const add = (value) => {
		return (result += value, add)
	}

	/*Признаю, воспользоваться toString надоумил гугл=)*/
	add.toString = () => result;
	
	return add;
}

// alert(func(2)(3)(5)); // выведет 10

console.log(func(2)(3)(5).toString());
