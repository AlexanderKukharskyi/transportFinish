import RR from "../pages/images/RR.jpg"
import "../pages/styles.css"


function ResultPage() {
return (
  <>
  <div className="results-title">Поехали...</div>
  <div ><img className="resulst-img" src={RR}/></div>
  <div className="results-text">По направлению <span></span></div>
  </>
)
}

export {
  ResultPage
}