import { useEffect } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage() {
  const {order} = useStoreon("order");

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