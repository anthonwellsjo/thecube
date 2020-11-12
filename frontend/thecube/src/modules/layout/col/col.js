import React from 'react';
import classes from './cols.module.css';

const Col = props => {
    return (
        <div className={classes.column}>
            {props.children}
        </div>
    )
}

export default Col;