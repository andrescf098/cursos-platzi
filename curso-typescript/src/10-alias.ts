(() => {
  type UserID = string | number | boolean
  let userId: UserID;
    // Liteal types
  type Sizes = "S" | "M" | "L";
  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === "string") {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
})()
