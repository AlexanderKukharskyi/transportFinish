import { useEffect } from "react";
import { Link } from "react-router-dom";
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"


function ResultPage() {
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
          <Link to="/success">
            <img className="results-img" src={item.path} alt="result" />
          </Link>
        </li>
)} 
      </ul>
    </div>
  </div>
  </>
)
}

export {
  ResultPage
}