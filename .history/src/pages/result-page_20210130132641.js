import RR from "../pages/images/RR.jpg";
import buran from "../pages/images/buran.jpg"
import dogs from "../pages/images/dogs.jpg"
import titanic from "../pages/images/titanic.jpg"
import "../pages/styles.css"


function ResultPage() {
return (
  <>
  <div className="results">
    <div className="results-title">Ваша поездка будет стоить ""$.</div>
    <div className="results-text">По указанному направлению доступны следующие виды транспорта:</div>
    <div className="results-images">
      <a href="#" className="results-link"><img className="results-img" src={RR} alt="result" /></a>
      <a href="#" className="results-link"><img className="results-img" src={buran} alt="result" /></a>
      <a href="#" className="results-link"><img className="results-img" src={dogs} alt="result" /></a>
      <a href="#" className="results-link"><img className="results-img" src={titanic} alt="result" /></a>
    </div>
  </div>
  </>
)
}

export {
  ResultPage
}