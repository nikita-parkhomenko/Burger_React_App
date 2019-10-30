import React from 'react'

import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <React.Fragment>
            <Backdrop cancelOrder={props.toggleSide} show={props.open} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>  
                <nav>
                    <NavItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer