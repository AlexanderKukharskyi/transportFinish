import {useStoreon} from "storeon/react" 
import RR from "../pages/images/RR.jpg";
import buran from "../pages/images/buran.jpg"
import dogs from "../pages/images/dogs.jpg"
import titanic from "../pages/images/titanic.jpg"
import "../pages/styles.css"


function ResultPage() {
  const {order} = useStoreon("order");

  console.log (order);
return (
  <>
  <div className="results">
    <div className="results-title">Ваша поездка будет стоить "" $.</div>
    <div className="results-text">По указанному направлению доступны следующие виды транспорта:</div>
    <div className="results-menu">
      <ul className="results-list">
      <li className="results-link results-link--left"><a href="#" ><img className="results-img" src={RR} alt="result" /></a></li>
      <li className="results-link results-link--left"><a href="#" ><img className="results-img" src={buran} alt="result" /></a></li>
      <li className="results-link results-link--right"><a href="#" ><img className="results-img" src={dogs} alt="result" /></a></li>
      <li className="results-link results-link--right"><a href="#" ><img className="results-img" src={titanic} alt="result" /></a></li>
      </ul>
    </div>
  </div>
  </>
)
}

export {
  ResultPage
}