/**
 * Created by sbelan on 4/5/2017.
 */
import {toggleTodo,getVisibleTodos} from '../../actionCreaters';
import TodoList from '../TodoList/TodoList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos:getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick:(id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
