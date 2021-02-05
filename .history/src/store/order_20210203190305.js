import {calculate} from "../lib/calculate"

const order = store => {
  store.on("@init", () => {
    return {
      order: {
        totalAmount: 0,
        distance: 0
      }
    }
  });

  store.on("order/setTotalAmount", (state, {distance, mass, volume}) => {
  const totalAmount = calculate(distance, +mass, +volume)

    return {
      order: {
        ...state.order,
        totalAmount,
        distance
      }
    }
  });
  } 
export {
  order
}