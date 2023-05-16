import { useState, useEffect } from "react";
import Card from "../../components/card";
import Layout from "../../components/layout";

function Home() {
  const [items, setItems] = useState([]);
  const productsGet = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    productsGet();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap gap-5 justify-center">
        {items?.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.title}
              price={item.price}
              url={item.images[0]}
              category={item.category.name}
            />
          );
        })}
      </div>
    </Layout>
  );
}
export default Home;
