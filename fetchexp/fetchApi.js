"use strict";
// API- 'https://jsonplaceholder.typicode.com/todos/1'
exports.__esModule = true;
var axios_1 = require("axios");
var TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";
;
axios_1["default"].get(TODO_URL).then(function (response) {
    var todo = response.data;
    console.log(todo);
});
var TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
axios_1["default"].get(TODOS_URL).then(function (response) {
    var todos = response.data;
    console.log(todos);
});
