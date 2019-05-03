import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';
const mapStateToPorops = state => {
  return {todos: state.todos};
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToPorops,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
