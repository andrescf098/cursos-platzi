import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const Card = ({ name, price, url, category }) => {
  const context = useContext(ShoppingCartContext);
  return (
    <div className="bg-white cursor-pointer w-60 h-64 border border-solid border-gray-200 rounded-lg p-1.5">
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
          onClick={() => context.setCount(context.count++)}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{name}</span>
        <span className="text-lg font-semibold">{price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.url,
  category: PropTypes.string,
};

export default Card;
