/**
 * Created by sbelan on 4/5/2017.
 */
import Link from '../Link/Link';
import {setVisibilityFilter} from '../../actionCreaters';
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
    return {
        active:  ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick:() => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;