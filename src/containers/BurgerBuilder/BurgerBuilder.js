import React, {Component} from 'react'

import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            bacon: 1,
            meat: 2
        }
    }
    render() {
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} /> 
                <div>Build Controls</div>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder