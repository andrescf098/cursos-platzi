(() => {
  let userId: string | number;
  userId = 10;
  userId = "10";
  function greeting(myText: string | number) {
    if(typeof myText === "string") {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }
  greeting("Hola");
  greeting(10.34)
})()
