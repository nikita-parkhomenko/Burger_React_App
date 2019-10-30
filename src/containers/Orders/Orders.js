import React, { Component } from 'react';
import axios from '../../axios-order';

// import classes from './Orders.css';
import Order from '../../components/Order/Order'

class Orders extends Component {

    state = {
        orders: [],
        loading: false
    }

    
    componentDidMount() {
        axios
            .get('/orders.json')
            .then( res => {
                let fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                };
                this.setState({loading: false, orders: fetchedOrders})
                console.log(fetchedOrders)
            })
            .catch( err => {
                this.setState({loading:false})
            })
    }
    render() {
        let orders = null;
        if (this.state.orders.length) {
            orders = this.state.orders.map( order => {
                return <Order key={order.id} price={order.price}
                ingredients={order.ingredients} />
            })
        }
        return(
            <div>
                {orders}
            </div>
        )
    }
};

export default Orders;