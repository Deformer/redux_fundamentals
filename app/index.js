import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter';
import VisibleTodoList from './components/VisibleTodoList/VisibleTodoList';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo/AddTodo';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const rootElement = document.getElementById('root');

const TodoApp =()=> (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);



import { createStore, combineReducers } from 'redux';

ReactDom.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    rootElement
);
