import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ShoppingCartContext = createContext();

export const ShoppingCartPrivider = ({ children }) => {
  // Shopping cart - count
  const [count, setCount] = useState(0);
  // Shoping cart - Products
  const [cartProducts, setCartProducts] = useState([]);
  // Product Detail - Open
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Checkout Side Menu - Open
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  // Product side show
  const [productShow, setProductShow] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productShow,
        setProductShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartPrivider.propTypes = {
  children: PropTypes.element.isRequired,
};
