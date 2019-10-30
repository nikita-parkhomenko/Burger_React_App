import React from 'react';

import classes from './Order.css'

const Order = (props) => {

    let ingredients = [];
    for (let igName in props.ingredients) {
        ingredients.push({
            name: igName,
            amount: props.ingredients[igName]
        })
    }
    let igOutput = ingredients.map( ig => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'

        }} key={ig.name}> {ig.name} ({ig.amount}) </span>
    })
    return(
        <div className={classes.Order}>
            <p>Ingredients: {igOutput} </p>
            <p>Price: <strong>{props.price} UAH</strong></p>
        </div>
    )
};

export default Order;