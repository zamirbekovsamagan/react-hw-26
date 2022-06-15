import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/slices/cartActions';
import { uiActions } from '../../store/slices/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cart = useSelector((state) => state.cart.fetchedItems)
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(uiActions.toggle()) // dispatch({type: 'increment', ....})
    dispatch(getData())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
