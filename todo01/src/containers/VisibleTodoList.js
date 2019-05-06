import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  }
};

const mapStateToPorops = state => {
  return {todos: getVisibleTodos(state.todos, state.visibilityFilter)};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToPorops,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
