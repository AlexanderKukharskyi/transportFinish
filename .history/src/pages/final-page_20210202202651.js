import { useEffect } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage({location}) {
  const {order} = useStoreon("order");
  const {vehicles} = useStoreon("vehicles");

  useEffect(() => {
    vehicles.find(location.state.imgId[location.state, vehicles.vehiclesOption])
  };

  console.log(order)

return (
  <>
  <div>
    <div className="results-title">Стоимость поездки составит {order.totalAmount} $.</div>
  </div>
  </>
)
}

export {
  FinalPage
}