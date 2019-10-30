import React from 'react'

import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'

const NavItems = () => {
    return(
        <ul className={classes.NavItems}>
            <NavItem exact link='/' > Burger Builder </NavItem>
            <NavItem link='/orders' > Orders </NavItem>
        </ul>
    )
}

export default NavItems