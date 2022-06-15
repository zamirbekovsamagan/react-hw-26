import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/slices/uiSlice";
import ProductsForm from "./components/Shop/ProductsForm";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    let timer;
    if (notification) {
      timer = setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [notification, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <ProductsForm />
        {isShow && <Cart />}
      </Layout>
    </>
  );
}

export default App;
