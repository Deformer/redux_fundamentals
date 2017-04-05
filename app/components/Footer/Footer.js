/**
 * Created by sbelan on 4/5/2017.
 */
import React from 'react';
import FilterLink from '../FilterLink/FilterLink';
const Footer = () =>(
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_ACTIVE"
        >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_COMPLETED"
        >
            Completed
        </FilterLink>
    </p>
);

export default Footer;