 import React from 'react';

 import classes from './Toolbar.css'
 import Logo from '../../Logo/Logo'

 const Toolbar = (props) => {
     return(
         <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>...</nav>
         </header>
     )
 }

 export default Toolbar