import React from 'react'

import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'

const SideDrawer = () => {

    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>  
            <nav>
                <NavItems />
            </nav>
        </div>
    )
}

export default SideDrawer