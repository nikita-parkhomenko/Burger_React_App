import React from 'react'

import classes from  './Burger.css'
import BurgerIngredients from './BurgerIngredient/BurgerIngredients'


const Burger = (props) => {

    let transformIngred = Object.keys(props.ingredients)
        .map( ingred => {
            return [...Array(props.ingredients[ingred])].map( (_, index) => {
                return <BurgerIngredients key={ingred + index} type={ingred} />
            })
        })
        .reduce( (arr, current) => {
            return arr.concat(current)
        }, [])

    if (transformIngred.length === 0) {
        transformIngred = <p>Please start adding ingredients!</p>
    }
    console.log(transformIngred)
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformIngred}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default Burger