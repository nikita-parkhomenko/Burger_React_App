import React from 'react'

import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show}
                cancelOrder={props.cancelOrder} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-200vh)',
                    opacity: props.show ? '1' : '2'
                }}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Modal