import React, {Component} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuiladControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummury from '../../components/Burger/OrderSummury/OrderSummary'

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
        totalPrice: 50,
        readyToOrder: false,
        orderMode: false
    }

    orderModeHandler = () => {
        this.setState({ orderMode: true })
    }

    checkReadyToOrder = (ingredients) => {
        let sum = Object.values(ingredients)
            .reduce( (sum, current) => {
                return sum += current
            }, 0)
        
        this.setState({ readyToOrder: sum > 0 })
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

        this.checkReadyToOrder(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        let newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        console.log(newPrice);

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })

        this.checkReadyToOrder(updatedIngredients)
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <React.Fragment>
                <Modal show={this.state.orderMode} >
                    <OrderSummury ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    orderMode={this.orderModeHandler}
                    readyToOrder={this.state.readyToOrder} />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder