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
        <p>Current price: <strong> {props.price} UAH</strong> </p>
        {controls.map( cntr => {
            return <BuildControl label={cntr.label} 
                key={cntr.label}
                added={() => props.addIngredient(cntr.type)}
                remove={ () => props.removeIngredient(cntr.type)}
                disabled={props.disabled[cntr.type]} />
        })}
    </div>
)

export default BuildControls