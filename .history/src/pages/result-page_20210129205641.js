import RR from "../pages/images/RR.jpg"
import "../pages/styles.css"


function ResultPage() {
return (
  <>
  <div className="results-title">
  {/* <div className="resulst-img"><img src={RR}/></div> */}
  <div className="results-text">Ваша поездка будет стоить "". По указанному направлению доступны следующие транспортные средства:</div>
  </div>
  </>
)
}

export {
  ResultPage
}