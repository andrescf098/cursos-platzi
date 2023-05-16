import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../home";
import MyAccount from "../myAccount";
import MyOrder from "../myOrder";
import MyOrders from "../myOrders";
import NotFound from "../notFound";
import SignIn from "../signin";
import "../../App.css";
import Navbar from "../../components/navbar";
import { ShoppingCartPrivider } from "../../context";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartPrivider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartPrivider>
  );
};

export default App;
