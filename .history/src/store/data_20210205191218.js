import {Cities} from "../data/Cities"
const data = (store) => {
  store.on("@init", () => ({
      data: {
        fromCityId: 0,
        toCityId: 0,
        mass: 0,
        volume: 0,
        date: 0,
      }
    }))
    store.on("data/setData", (state, paiload) => {
      const fromCityData= Cities[paiload.fromCity].name;
      const toCityData= Cities[paiload.toCity].name;
      console.log(fromCityData)
      console.log(toCityData)
      return{
        data:{
          fromCityId: paiload.fromCity,
          toCityId: paiload.toCity,
          mass: paiload.mass,
          volume: paiload.volume,
          date: paiload.date
        }
      }
  })

}

export{
  data
}