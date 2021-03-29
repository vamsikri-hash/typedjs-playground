// API- 'https://jsonplaceholder.typicode.com/todos/1'

import axios from "axios";


const TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
};

axios.get(TODO_URL).then((response) => {
    const todo = response.data as Todo;
    console.log(todo);
});

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";



axios.get(TODOS_URL).then((response) => {
   const  todos = response.data as Array<Todo>;
   console.log(todos);
})