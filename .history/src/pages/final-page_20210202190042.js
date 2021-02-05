import { useState } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage() {

  return (
    <>
    <div>Hello world</div>
    <div>{vehicles.vehiclesOption.map(item =><li
          key={item.id}
          className={`results-link results-link--left ${!item.isExist && 'no-exist'}`}
          >
          <a href="/success">
            <img className="results-img" src={item.path} alt="result" />
          </a>
        </li></div>
    </>
  )
}

export {
  FinalPage
}