import RR from "../pages/images/RR.jpg";
import "../pages/styles.css"


function ResultPage() {
return (
  <>
  <div className="results-title">
    <div className="results-text">Ваша поездка будет стоить "". По указанному направлению доступны следующие транспортные средства:</div>
    <div className="results-images">
      <img className="results-img" src={RR} alt="result" />
      <img className="results-img" src={buran} alt="result" />
      <img className="results-img" src={dogs} alt="result" />
      <img className="results-img" src={titanic} alt="result" />
    </div>
  </div>
  </>
)
}

export {
  ResultPage
}