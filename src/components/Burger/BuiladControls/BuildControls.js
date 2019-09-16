import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: "Salad", type: 'salad' },
    { label: "Cheese", type: 'cheese' },
    { label: "Bacon", type: 'bacon' },
    { label: "Meat", type: 'meat' }
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map( cntr => {
            return <BuildControl label={cntr.label} key={cntr.label} />
        })}
    </div>
)

export default BuildControls