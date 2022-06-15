import { BASE_URL } from "../../utils/constants/general";
import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const sendCartData = (cart) => {
    return (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending data o cart !",
        })
      );
      fetch(`${BASE_URL}/cart.json`, {
        method: "POST",
        body: JSON.stringify(cart),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Sending cart data failed");
          }
          dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success !",
              message: "Sent cart data successfully !",
            })
          );
          return response.json();
        })
        .catch((error) => {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error !",
              message: "Sending cart data failed !",
            })
          );
        });
    }
  }

export const getData = ()=>{
  return (dispatch) =>{
    fetch(`${BASE_URL}/cart.json`)
    .then(response =>response.json())
    .then(data=>{
      dispatch(cartActions.getDataFromServer(data))
    })
  }
}
