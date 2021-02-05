const data = store => {
  store.on("@init", () => {
    return {
      data: {
        fromCity: 0,
        toCity: 0,
        mass: 0,
        volume: 0,
        date: 0,
      }
    }
  })
}

store.on("order/setTotalAmount", (state, {distance, mass, volume}) => {

return {
  data: {
    ...state.order,
    fromCity,
    toCity,
    mass,
    volume,
    date,
  }
}
}