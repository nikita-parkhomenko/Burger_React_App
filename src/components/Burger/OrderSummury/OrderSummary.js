import React, {Component} from 'react'

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('Order Summary did update')
    }
    render() {
        const orderList = Object.entries(this.props.ingredients)
            .map( ingred => {
                return <li key={ingred[0]}> {ingred[0]}: {ingred[1]} </li>
            })
        
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger whith the following ingredients:</p>
                <ul>
                    {orderList}
                </ul>
                <p>Total price: <strong>{ this.props.summury } UAH</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.orderCancel}
                    btnType="Danger" > CANCEL </Button>
                <Button clicked={this.props.orderContinue}
                    btnType="Success" > CONTINUE </Button>
            </React.Fragment>
        )
    }
}

export default OrderSummary