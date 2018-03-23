import React from 'react';

const Todo = ({todo, remove}) => {
	return (<li onClick={() => 
		{remove(todo.id)}}>
		{todo.text}</li>);
}


const TodoList = ({todoList, remove}) => {
	const todos = todoList.map((todo) => {
		return <Todo todo={todo} key={todo.id} remove={remove}/>
	});

	return <ul>{todos}</ul>
}


export default TodoList;