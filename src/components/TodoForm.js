import React from 'react';

const TodoForm = ({addTodo}) => {
	let input;
	return (
		<div>
			<input style={{width:300}} ref={node => {
				input = node;
			}} />
			<button onClick={() => {
				addTodo(input.value);
				input.value = '';
			}}>+
			</button>
		</div>
		)
}

export default TodoForm;