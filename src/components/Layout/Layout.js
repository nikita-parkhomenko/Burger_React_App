import React, {Component} from 'react'

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    toggleSideDrawerHandler = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    
    render() {
        return(
            <React.Fragment>
                <Toolbar toggleSide={this.toggleSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} toggleSide={this.toggleSideDrawerHandler} />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
        </React.Fragment>    
        )
    }
}

export default Layout