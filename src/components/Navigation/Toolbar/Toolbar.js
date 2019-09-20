 import React from 'react';

 import classes from './Toolbar.css'
 import Logo from '../../Logo/Logo'
 import NavLinks from '../../Navigation/NavItems/NavItems'

 const Toolbar = (props) => {
     return(
         <header className={classes.Toolbar}>
            <div onClick={props.openSide} >Menu</div>
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