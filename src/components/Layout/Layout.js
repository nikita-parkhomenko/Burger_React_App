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

    openSideDrawerHandler = () => {
        this.setState({ showSideDrawer: true })
    }
    
    render() {
        console.log(this.state.showSideDrawer)
        return(
            <React.Fragment>
                <Toolbar openSide={this.openSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closeSide={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
        </React.Fragment>    
        )
    }
}

export default Layout