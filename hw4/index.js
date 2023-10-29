import Controller from "./controller/Controller.js";

const fetchController = new Controller('fetch', 'http://37.220.80.108/tasks');
const XHRController = new Controller('XMLHttpRequest', 'http://37.220.80.108/tasks');

fetchController.get();
fetchController.get({id:108});

fetchController.post(
	{body: {
		name: 'Задача',
		info: 'отправил задачу',
		isImportant: true
	}}
);

fetchController.patch(
	{
		id: 121,
		body: {
			name: 'Задача',
			info: 'Изменил задачу при помощи fetch',
			isImportant: false,
			isCompleted: true
		}
	}
)
/*
По идее если никто не удалит мою таску заранее, то при первом запросе
всё ок, потом должна быть ошибка
*/ 
// fetchController.delete({id:124})

XHRController.get();
XHRController.get({id: 108});
XHRController.post({
	body: {
		name: 'Задача',
    info: 'отправил задачу',
    isImportant: true
	}
})

XHRController.patch({
	id: 122,
	body: {
		name: 'Задача',
		info: 'Изменил задачу припомощи XMR',
		isImportant: false,
		isCompleted: true,
	}
})

/*То же самое, сначала должно быть ок, потом по плану ошибка*/
// XHRController.delete({id: 125})