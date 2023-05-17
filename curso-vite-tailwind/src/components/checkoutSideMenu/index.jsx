import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../orderCard";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const renderIcon = () => {};

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed w-[360px] h-[calc(100vh-76px)] right-0 top-[76px] border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Shopping Cart</h2>
        <div
          className="cursor-pointer"
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
        >
          <XMarkIcon className="h-5 w-5 text-black-500" />
        </div>
      </div>
      <div className="flex flex-col m-4 gap-2 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.key}
            title={product.name}
            imageUrl={product.url}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
