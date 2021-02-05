import { useState } from "react"
import "./styles.css"
import {calculate} from "../lib/calculate"
import {Cities} from "../data/Cities"
import {Directions} from "../data/Directions"
import {Masses} from "../data/Masses"
import {Volumes} from "../data/Volumes"







function HomePage() {
const [fromCity, setFromCity] = useState('');
const [toCity, setToCity] = useState('');
const [mass, setMass] = useState("");
const [volume, setVolume] = useState("");
const [date, setDate] = useState("")


const handleSubmit = (event) => { 
  event.preventDefault()
  ;

  const result = Directions.find(d => {
    return d.from === +fromCity && d.to === +toCity

  })
  const totalAmount = calculate(result.distance, +mass, +volume)
  console.log(totalAmount)
}

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="request-form__item">
        <span className="request-form__label">Откуда:</span>
        <select onChange={(event) => setFromCity(event.target.value)} value={fromCity}>
          <option disabled value="">Выбери</option>
          {Cities.map(city => <option key={city.id} value={city.id}>{city.title}</option>)}
        </select>
      </div>

      <div className="request-form__item">
        <span className="request-form__label">Куда:</span>
        <select onChange={(event) => setToCity(event.target.value)} value={toCity}>
        <option disabled value="">Выбери</option>
        {Cities.map(city => <option key={city.id} value={city.id}>{city.title}</option>)}
        </select>
      </div>

      <div className="request-form__item">
        <span className="request-form__label">Дата:</span>
        <input className="request-form__text" type="date" onChange={(event) => setDate(event.target.value)} value={date}/>
      </div>

      <div className="request-form__item">
          <span className="request-form__label">Масса, тн:</span>

            <select onChange={(event) => setMass(event.target.value)} value={mass}>
            {Masses.map(mass => <option key={mass} value={mass}>{mass}</option>)}
            </select>
      </div> 

      <div className="request-form__item">
          <span className="request-form__label">Обьем, м3:</span>
            
            <select onChange={(event) => setVolume(event.target.value)} value={volume}>
            {Volumes.map(volume => <option key={volume} value={volume}>{volume}</option>)}
            </select>

      </div>
      <div className="request-form__submit">
        
        <button className="request-form__submit--button">Рассчитать</button>
      </div>
    </form>
    
  )

}

export {
  HomePage
}