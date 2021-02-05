const vehiclesOption = [
  {path:"/images/RR.jpg", id: 1, distance: 1000000, isExist:true},
  {path:"/images/buran.jpg", id: 2, distance: 1000000, isExist:true},
  {path:"/images/dogs.jpg", id: 3, distance: 9999, isExist:true},
  {path:"/images/titanic.jpg", id: 4, distance: 9999, isExist:true},
  ]


const vehicles = store => {
  store.on("@init", () => {
    return {
      vehicles: {
        vehiclesOption
      }
    }
  });


  store.on("vehicles/chooseVehicle", (state, {distance}) => {
    const {vehiclesOption} = state.vehicles;

    for (let i = 0; i < vehiclesOption.length; i++) {
      if (vehiclesOption[i].distance < +distance) {
        vehiclesOption[i].isExist = false;
      }
    }


    return {
      vehicles: {
        ...state.vehicles,
        vehiclesOption
      }
    }
  });
  } 
export {
  vehicles
}