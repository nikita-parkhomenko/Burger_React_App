import React, { Component } from 'react';
import axios from '../../../axios-order';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            code: ''
        },
        loading: false
    };

    orderMode = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false })
            });

    }

    render() {
        let form = this.state.loading ? 
        <Spinner />
        :
        (<form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="code" placeholder="Code" />
                <Button btnType="Success" clicked={this.orderMode} >Order</Button>
        </form>);

        return(
            <div className={classes.ContactData}>
                <h3>Enter your contact</h3>
                {form}
            </div>
        )
    }

}

export default ContactData;