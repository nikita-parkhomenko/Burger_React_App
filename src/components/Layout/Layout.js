import React, {Component} from 'react'

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    
    render() {
        console.log(this.state.showSideDrawer)
        return(
            <React.Fragment>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closeSide={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
        </React.Fragment>    
        )
    }
}

export default Layout