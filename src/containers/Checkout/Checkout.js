import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummury from '../../components/Order/CheckoutSummury/CheckoutSummury';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === "price") {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({ ingredients: ingredients, totalPrice: price })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return(
            <div>
                <CheckoutSummury
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                ingredients={this.state.ingredients} />
                <Route path={ this.props.match.path + '/contact-data' }
                 render={(props) => (<ContactData {...props} price={this.state.totalPrice}
                 ingredients={this.state.ingredients} />) } />
            </div>
        )
    }
};

export default Checkout;