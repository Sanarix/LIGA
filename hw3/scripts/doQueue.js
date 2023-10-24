const container = document.querySelector('#container');
const smile = '&#128578';

function doQueue() {
	//Задача 1
	Promise.resolve('black').then(color => {
		container.style.backgroundColor = color;
	})

	//Задача 2
	Promise.resolve('value').then(str => {
		Promise.resolve(str).then(str => {
			console.log(
				`Вывод в консоль из функции ${arguments.callee.name}: ${str} `
				);
		})
	})

	//Задача3
	Promise.resolve(smile).then(res => {
		container.innerHTML = res;
	})
	
}

doQueue();