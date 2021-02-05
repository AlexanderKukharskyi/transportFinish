import {useStoreon} from "storeon/react" 
import RR from "../pages/images/RR.jpg";
import buran from "../pages/images/buran.jpg"
import dogs from "../pages/images/dogs.jpg"
import titanic from "../pages/images/titanic.jpg"
import "../pages/styles.css"


function ResultPage() {
  const {order} = useStoreon("order");
  const {vehicles} = useStoreon("vehicles")

  console.log (order, vehicles);
return (
  <>
  <div className="results">
    <div className="results-title">Ваша поездка будет стоить {order.totalAmount} $.</div>
    <div className="results-text">По указанному направлению доступны следующие виды транспорта:</div>
    <div className="results-menu">
      <ul className="results-list">
        {vehicles.vehiclesOption.map(item =><li className="results-link results-link--left"><a href="/success"><img className="results-img" src={item.path} alt="result" /></a></li>
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