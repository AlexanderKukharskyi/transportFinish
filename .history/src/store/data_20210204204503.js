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

store.on("data/setData", (state, {fromCity, toCity, mass, volume, date}) => {
  const data = {
    fromCity: fromCity,
    toCity: toCity,
    mass: mass,
    volume: volume,
    date: date,
  }

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