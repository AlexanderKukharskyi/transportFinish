import { useEffect } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage() {
//   const {order} = useStoreon("order");
//   const {vehicles, dispatch} = useStoreon("vehicles")

//   useEffect(() => {
//     dispatch('vehicles/chooseVehicle', {distance: order.distance})
//     return () => {
//       dispatch('vehicles/reset')
//     }
//   }, [order, dispatch])
// return (
//   <>
//   <div>
//     <div className="results-title">Стоимость поездки составит {order.totalAmount} $.</div>
//   </div>
//   </>
// )
// }

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
<div className="results">
  <div className="results-title">Ваша поездка будет стоить {order.totalAmount} $.</div>
  <div className="results-text">По указанному направлению доступны следующие виды транспорта:</div>
  <div className="results-menu">
    <ul className="results-list">
      {vehicles.vehiclesOption.map(item =><li
        key={item.id}
        className={`results-link results-link--left ${!item.isExist && 'no-exist'}`}
        >
        <a href="/success">
          <img className="results-img" src={item.path} alt="result" />
        </a>
      </li>
)} 
    </ul>
  </div>
</div>
</>
)
}


export {
  FinalPage
}