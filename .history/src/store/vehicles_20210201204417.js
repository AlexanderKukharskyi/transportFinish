const vehiclesOption = [
  {path:"/pages/images/RR.jpg", id: 1, distance: 1000000, isExist:true},
  {path:"/pages/images/buran.jpg", id: 2, distance: 1000000, isExist:true},
  {path:"/pages/images/dogs.jpg", id: 3, distance: 10000, isExist:true},
  {path:"/pages/images/titanic.jpg", id: 4, distance: 10000, isExist:true},
  ]


const vehicles = store => {
  store.on("@init", () => {
    return {
      vehicles: {
        vehiclesOption
      }
    }
  });

  // store.on("vehicles/chooseVehicle", (state, {distance}) => {
  //   const result = Directions.find(d => {
  //     return d.from === +fromCity && d.to === +toCity
  
  //   })
  
  //   return {
  //     vehicles: {
  //       ...state.vehicles,
  //       distance
  //     }
  //   }
  // });
  } 
export {
  vehicles
}