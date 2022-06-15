import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData, sendCartData } from "../../store/slices/cartActions";
import classes from "./ProductsForm.module.css";

const ProductsForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const InputChangeHandler = (event) => {
    const value = event.target.value;
    setData({
      ...data,
      id: Math.random().toString(),
      [event.target.name]: value,
    });
  };

  let formIsValid = data.title.trim() !== '' && data.price.trim() !== '' && data.description.trim() !== ''

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(sendCartData(data));
    dispatch(getData());
    setData({
      title: "",
      price: "",
      description: "",
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>Add product</h2>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={InputChangeHandler}
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        value={data.price}
        onChange={InputChangeHandler}
      />
      <label>Description</label>
      <textarea
        type="text"
        name="description"
        value={data.description}
        onChange={InputChangeHandler}
      />
      <button disabled={!formIsValid}>Add</button>
    </form>
  );
};

export default ProductsForm;
