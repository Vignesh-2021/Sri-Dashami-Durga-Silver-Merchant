import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../pages/home/Home";
import CategoryPage from "../pages/Elements/CategoryPage";
import SingleProduct from "../pages/ProductDetails/SingleProduct";
import CartPage from "../components/CartPage";
import Loginpage from "../pages/home/Access/Loginpage";
import SingUpPage from "../pages/home/Access/SingUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:categoryName", element: <CategoryPage /> },
      { path: "/categories/:categoryName/shop/:productId", element: <SingleProduct /> },
      { path:"/cart" , element: <CartPage/>}
    ],
  },
  {
    path: "/login",
    element: <Loginpage/>
  },
  {
    path:"/SignUp",
    element: <SingUpPage/>
  }
]);

export default router;
