const order = store => {
  store.on("@init", () => {
    return {
      totalAmount: 0
    }
  });

  store.on("setTotalAmount", (state, totalAmount) => {
    return {
      ...state,
      totalAmount
    }
  });
  } 
export {
  order
}