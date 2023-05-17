import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

const Card = ({ key, name, price, url, category, description }) => {
  const context = useContext(ShoppingCartContext);
  const showProduct = (name, price, url, category, description) => {
    context.openProductDetail();
    context.setProductShow({
      name,
      price,
      url,
      category,
      description,
    });
  };
  const addProductToCart = (
    event,
    key,
    name,
    price,
    url,
    category,
    description
  ) => {
    const product = {
      key,
      name,
      price,
      url,
      category,
      description,
    };
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, product]);
    context.setCount(context.count + 1);
  };
  return (
    <div
      className="bg-white cursor-pointer w-60 h-64 border border-solid border-gray-200 rounded-lg p-1.5"
      onClick={() => {
        showProduct(name, price, url, category, description);
      }}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute top-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={url}
          alt="headphones"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => {
            addProductToCart(
              event,
              key,
              name,
              price,
              url,
              category,
              description
            );
          }}
        >
          <PlusSmallIcon className="w-4 h-4 text-black/60" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{name}</span>
        <span className="text-lg font-semibold">$ {price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.array,
  category: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
