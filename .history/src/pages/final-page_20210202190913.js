import { useEffect } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage() {
  const {order} = useStoreon("order");
  const {vehicles, dispatch} = useStoreon("vehicles")

  useEffect(() => {
    dispatch('vehicles/chooseVehicle', {distance: order.distance})
    return () => {
      dispatch('vehicles/reset')
    }
  }, [order, dispatch])


  return (
    <>
    <div>Hello world</div>
    <div>{order.totalAmount}bljhb</div>
    {/* <div><a href="/success">
            <img className="results-img" src={item.path} alt="result" />
          </a></div> */}
    </>
  )
}

export {
  FinalPage
}