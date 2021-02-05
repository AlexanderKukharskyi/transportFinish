import { useEffect } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage() {
  const {order} = useStoreon("order");
  // const {vehicles, dispatch} = useStoreon("vehicles")

  useEffect(() => {
    dispatch('vehicles/chooseVehicle', {distance: order.distance})
    return () => {
      dispatch('vehicles/reset')
    }
  }, [order, dispatch])


  return (
    <>
    <div>Hello world
    <div>{vehicles.vehiclesOption.map(item =><li
          key={item.id}
          className={`results-link results-link--left ${!item.isExist && 'no-exist'}`}
          >
          <a href="/success">
            <img className="results-img" src={item.path} alt="result" />
          </a>
        </li></div>
    </div>
    </>
  )
}

export {
  FinalPage
}