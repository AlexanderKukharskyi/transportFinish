import { useState } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage() {

  return (
    <>
    <div>Hello world</div>
    <div><a href="/success">
            <img className="results-img" src={item.path} alt="result" />
          </a></div>
    </>
  )
}

export {
  FinalPage
}