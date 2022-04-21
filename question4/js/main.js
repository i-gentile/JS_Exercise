import {MyApp} from './modules/my-app.js';

var app = new MyApp(document.querySelector('.js-list'), [
    {
        done: false,
        name: 'One',
    }, {
        done: true,
        name: 'Two',
    }, {
        done: true,
        name: 'Three',
    }, {
        done: false,
        name: 'Four',
    }
]);
