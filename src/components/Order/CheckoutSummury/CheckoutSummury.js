import React from 'react';

import classes from './CheckoutSummury.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

class CheckoutSummury extends React.Component {
    render() {
        return(
            <div className={classes.CheckoutSummury}>
                <h1>We hope it tastes well!</h1>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Burger ingredients={this.props.ingredients} />
                </div>
                <Button btnType="Danger" clicked={this.props.checkoutCancelled} >Cancel</Button>
                <Button btnType="Success" clicked={this.props.checkoutContinued} >Continue</Button>
            </div>
        )
    }
};

export default CheckoutSummury;