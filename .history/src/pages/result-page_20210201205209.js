import { useEffect } from "react";
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"


function ResultPage() {
  const {order} = useStoreon("order");
  const {vehicles, dispatch} = useStoreon("vehicles")

  useEffect(() => {
    dispatch('vehicles/chooseVehicle', order.distance)
  }, [order, dispatch])
return (
  <>
  <div className="results">
    <div className="results-title">Ваша поездка будет стоить {order.totalAmount} $.</div>
    <div className="results-text">По указанному направлению доступны следующие виды транспорта:</div>
    <div className="results-menu">
      <ul className="results-list">
        {vehicles.vehiclesOption.map(item =><li key={item.id} className="results-link results-link--left">
          <a href="/success">
            {item.isExist && '!!!'}
            <img className="results-img" src={item.path} alt="result" />
          </a>
        </li>
)} 
      {/* <li className="results-link results-link--left"><a href="#" ><img className="results-img" src={buran} alt="result" /></a></li>
      <li className="results-link results-link--right"><a href="#" ><img className="results-img" src={dogs} alt="result" /></a></li>
      <li className="results-link results-link--right"><a href="#" ><img className="results-img" src={titanic} alt="result" /></a></li> */}
      </ul>
    </div>
  </div>
  </>
)
}

export {
  ResultPage
}