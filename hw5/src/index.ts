import Controller from './controller/Controller.js';

const fetchController = new Controller('http://37.220.80.108/tasks');

fetchController.get();
fetchController.get({ id: 108 });

fetchController.post({
  body: {
    name: 'Задача',
    info: 'отправил задачу',
    isImportant: true,
  },
});

fetchController.patch({
  id: 121,
  body: {
    name: 'Задача',
    info: 'Изменил задачу при помощи fetch',
    isImportant: false,
    isCompleted: true,
  },
});
/*
По идее если никто не удалит мою таску заранее, то при первом запросе
всё ок, потом должна быть ошибка
*/
// fetchController.delete({id:124})
