import {calculate} from "../lib/calculate"

const order = store => {
  store.on("@init", () => {
    return {
      order: {
        totalAmount: 0
      }
    }
  });

  store.on("setTotalAmount", (state, {distance, mass, volume}) => {
  const totalAmount = calculate(distance, +mass, +volume)

    return {
      ...state,
      totalAmount
    }
  });
  } 
export {
  order
}