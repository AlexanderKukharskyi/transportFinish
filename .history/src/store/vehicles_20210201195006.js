const vehicles = store => {
  store.on("@init", () => {
    return {
      vehicles: {
        distance: 0
      }
    }
  });

  store.on("vehicles/chooseVehicle", (state, {distance}) => {
  const Result = calculate(distance, +mass, +volume)

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