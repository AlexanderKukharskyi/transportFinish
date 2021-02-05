import RR from "../pages/images/RR.jpg";
import "../pages/styles.css"


function ResultPage() {
return (
  <>
  <div className="results-title">
    <div className="results-text">Ваша поездка будет стоить "". По указанному направлению доступны следующие транспортные средства:</div>
    <div className="results-images">
      <img src={RR} className="results-img" alt="result" />
      </div>
  </div>
  </>
)
}

export {
  ResultPage
}