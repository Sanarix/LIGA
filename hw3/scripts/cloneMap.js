//Аналог метода map с защитой от записи undefined значений

Array.prototype.handleMap = function( cb ) {
	const result = [];
	for( let i = 0; i < this.length; i++ ) {
		const iterationResult = cb(this[i], i, this);
		if(iterationResult) {result.push(iterationResult)}
	}
	//Если в массив так и не удалось ничего записать то вернём undefined
	return result.length > 0 ? result : undefined;
}

const array = [1, 2, 3, 4, 5];

const arr2 = array.handleMap( el => {return el += 1});


console.log('-----Результат работы метода-----');
arr2.handleMap(el => console.log(el));
console.log('---------------------------------')
