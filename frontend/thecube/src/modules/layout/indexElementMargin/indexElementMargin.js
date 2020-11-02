import React from 'react';
import classes from './indexElementMargin.module.css';


const IndexElementMargin = props => {
    return(
        <div style={{height: props.distance}} className={classes.distance}></div>
    )
}

export default IndexElementMargin;