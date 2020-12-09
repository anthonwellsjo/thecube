import React from 'react';
import classes from './row.module.css';
import classnames from 'classnames';
 
const Row = props => {
    return (
        <div className={props.reverse? classnames(classes.row, classes.reverse) : classnames(classes.row, classes.normal)}>
            {props.children}
        </div>
    )
}

export default Row;