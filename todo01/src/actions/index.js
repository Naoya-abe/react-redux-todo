export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text
        //text: text,
  };
};

export const toggleTodo = index => {
    return {
        type: TOGGLE_TODO,
        index
        //index: index
    };
  };

  export const addTodo = filter => {
    return {
        type: ADD_TODO,
        filter,
        // filter: filter
    };
  };
