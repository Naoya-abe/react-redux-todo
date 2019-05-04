import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';
const mapStateToPorops = state => {
  return {todos: state.todos};
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
