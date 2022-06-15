import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, price, description } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
          <p>{description}</p>
      </div>
    </li>
  );
};

export default CartItem;
