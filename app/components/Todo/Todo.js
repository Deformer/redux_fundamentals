/**
 * Created by sbelan on 4/5/2017.
 */
import React from 'react';

const Todo = ({
                  onClick,
                  completed,
                  text
              }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration:
                completed?
                    'line-through'
                    :'none'
        }}
    >
        {text}
    </li>
);

export default Todo;