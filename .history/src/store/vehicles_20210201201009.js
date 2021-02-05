const vehiclesOption = [
  {path:"./pages/images/RR.jpg", id: 1, distatnce: 1000000, if (exists) {true}},
  {path:"./pages/images/buran.jpg", id: 2},
  {path:"./pages/images/dogs.jpg", id: 3},
  {path:"./pages/images/titanic.jpg", id: 4},
  ]


const vehicles = store => {
  store.on("@init", () => {
    return {
      vehicles: {
        distance: 0
      }
    }
  });

  store.on("vehicles/chooseVehicle", (state, {distance}) => {
    const result = Directions.find(d => {
      return d.from === +fromCity && d.to === +toCity
  
    })
  
    return {
      order: {
        ...state.vehicles,
        distance
      }
    }
  });
  } 
export {
  order
}