import React, {Component} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuiladControls/BuildControls'

const INGREDIENTS_PRICE = {
    salad: 20,
    cheese: 15,
    bacon: 22,
    meat: 40
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 100
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        let newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        console.log(newPrice);

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }
    render() {
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls addIngredient={this.addIngredientHandler} />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder