import {useContext, useEffect, useState} from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const [btnHighlighted, setBtnhighlighted] = useState(false)

const cartCtx = useContext(CartContext)

const numOfCartItems = cartCtx.items.reduce((curNum,item) => {
    return curNum + item.amount
}, 0)

const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

const {items} = cartCtx

useEffect(() => {
    if(items.length === 0) {
        return
    }
 setBtnhighlighted(true)

 const timer = setTimeout(() => {
     setBtnhighlighted(false)
 }, 300)

 return () => {
     clearTimeout(timer)
 }
},[items])


 return <button className={btnClasses} onClick = {props.onClick}>
     <span className={classes.icon}><CartIcon /></span>
     <span>My Cart</span>
     <span className={classes.badge}> {numOfCartItems} </span>
 </button>
}

export default HeaderCartButton