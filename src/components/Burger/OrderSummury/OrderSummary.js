import React from 'react'

const OrderSummary = (props) => {
    const orderList = Object.entries(props.ingredients)
        .map( ingred => {
            return <li key={ingred[0]} > {ingred[0]}: {ingred[1]}</li>
        })

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger whith the following ingredients:</p>
            <ul>
                {orderList}
            </ul>
            <p>Continue to Checkout?</p>
        </React.Fragment>
    )
}

export default OrderSummary