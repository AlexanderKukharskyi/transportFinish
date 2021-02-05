const data = (store) => {
  store.on("@init", () => ({
      data: {
        fromCity: 0,
        toCity: 0,
        mass: 0,
        volume: 0,
        date: 0,
      }
    }))
    store.on("data/setData", (state, paiload) => {
      return{
        data:{
          fromCity:0,
          toCity: 0,
          mass: 0,
          volume: 0,
          date: 0,
        }
      }
  })

}

export{
  data
}