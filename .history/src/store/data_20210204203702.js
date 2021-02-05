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