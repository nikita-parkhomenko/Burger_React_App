 import React from 'react';

 import classes from './Toolbar.css'
 import Logo from '../../Logo/Logo'
 import NavLinks from '../../Navigation/NavItems/NavItems'

 const Toolbar = (props) => {
     return(
         <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavLinks />
            </nav>
         </header>
     )
 }

 export default Toolbar