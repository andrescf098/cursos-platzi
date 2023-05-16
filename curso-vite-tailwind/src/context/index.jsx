import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ShoppingCartContext = createContext();

export const ShoppingCartPrivider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartPrivider.propTypes = {
  children: PropTypes.element.isRequired,
};
