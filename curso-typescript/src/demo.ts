//@ts-check

async () => {
  const myCart: any = [];
  const products: any = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch("http://api.escuelajs.co/api/v1/products", {
      method: "GET",
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i];
    }
    return total;
  }
  function addProduct(index: any) {
    if (getTotal.length >= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  const total = getTotal();
  console.log(total);
  const person = {
    name: "Nicolas",
    lastName: "Molina",
  };
  const rta = person;
  console.log(rta);
};
