/**
 * Created by sbelan on 4/5/2017.
 */
let nextTodoId = 0;
    const addTodo = (text) => {
        return {
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
        }
    };
    const setVisibilityFilter = (filter) => {
        return {
            type: 'SET_VISIBILITY_FILTER',
            filter
        }
    };
    const toggleTodo = (id) => {
        return {
            type: 'TOGGLE_TODO',
            id
        }
    };
    const getVisibleTodos = (
        todos,
        filter
    ) => {
        switch(filter){
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_ACTIVE':
                return todos.filter(
                    todo => !todo.completed
                );
            case 'SHOW_COMPLETED':
                return todos.filter(
                    todo => todo.completed
                );
            default:
                return todos;
        }
    };

export {addTodo, setVisibilityFilter, toggleTodo, getVisibleTodos};