 import React from 'react';

 import classes from './Toolbar.css'
 import Logo from '../../Logo/Logo'
 import NavLinks from '../../Navigation/NavItems/NavItems'
 import DrawerToggle from '../SideDrawer/DrowerToggle/DrawerToggle'

 const Toolbar = (props) => {
     return(
         <header className={classes.Toolbar}>
            <DrawerToggle toggleSide={props.toggleSide} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavLinks />
            </nav>
         </header>
     )
 }

 export default Toolbar