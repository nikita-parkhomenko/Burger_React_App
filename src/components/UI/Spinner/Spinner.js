import React from 'react';

import classes from './Spinner.css'

const spinner = () => (
    <div style={{display: 'block', textAlign: 'center'}}><div className={classes.ldsRing} ><div></div><div></div><div></div><div></div></div></div>
);

export default spinner;