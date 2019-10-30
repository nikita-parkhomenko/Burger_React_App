import React, {Component} from 'react';
import axios from '../../axios-order';

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuiladControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummury from '../../components/Burger/OrderSummury/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENTS_PRICE = {
    salad: 20,
    cheese: 15,
    bacon: 22,
    meat: 40
}
class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 50,
        readyToOrder: false,
        orderMode: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://react-burger-app-55968.firebaseio.com/ingredients.json')
            .then( response => {
                this.setState({ ingredients: response.data })
            })
    }

    orderModeHandler = () => {
        this.setState({ orderMode: true })
    }

    orderContinueHandler = () => {
        this.props.history.push('/checkout');
        // alert('You are continue!')
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        };
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathName: '/checkout',
            search: '?' + queryString
        })
    }

    cancelOrderMode = () => {
        this.setState({ orderMode: false })
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

        let orderSummary = null;

        let burger = <Spinner />;
        if (this.state.ingredients) {
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients} /> 
                    <BuildControls addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        orderMode={this.orderModeHandler}
                        readyToOrder={this.state.readyToOrder} />
                </React.Fragment>
            );
            orderSummary = (
                <OrderSummury 
                 summury={this.state.totalPrice}
                 orderContinue={this.orderContinueHandler}
                 orderCancel={this.cancelOrderMode}
                 ingredients={this.state.ingredients} />
             )
            }
            
            if (this.state.loading) {
                orderSummary = <Spinner />
            }


        return(
            <React.Fragment>
                <Modal show={this.state.orderMode}
                    cancelOrder={this.cancelOrderMode} >
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        )
    }
}

export default BurgerBuilder