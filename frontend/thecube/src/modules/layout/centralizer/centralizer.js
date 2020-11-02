import React from 'react';
import classes from './centralizer.module.css';
import classnames from 'classnames';

const Centralizer = props => {
    let classSpec = classes.centralizer;
    if (props.column) {
        classSpec = classnames(classes.centralizer, classes.column)
    }
    if(props.column && props.space){
        classSpec = classnames(classes.centralizer, classes.column, classes.space)
    }
    if(props.space){
        classSpec = classnames(classes.centralizer, classes.space)
    }
    return (
        <div className={classSpec}>
            {props.children}
        </div>
    )
}

export default Centralizer;