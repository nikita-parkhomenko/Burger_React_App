import React, {Component} from 'react'

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    toggleSideDrawerHandler = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    
    render() {
        console.log(this.state.showSideDrawer)
        return(
            <React.Fragment>
                <Toolbar toggleSide={this.toggleSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closeSide={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
        </React.Fragment>    
        )
    }
}

export default Layout