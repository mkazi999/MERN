import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {

  const dispatch = useDispatch()
  const { title, quantity, total, price,id } = props.item;

const removeItemHandler =() =>{
  dispatch(cartActions.removeItemFromCart(id))
}

const addItemToHandler = ()=> {
  dispatch(cartActions.addItemToCart({ id, price, title }))
}

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemToHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
