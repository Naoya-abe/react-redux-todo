import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );

  TodoList.propTypes = {
    todos: PropTypes.arrayOF(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
};

export default TodoList;
