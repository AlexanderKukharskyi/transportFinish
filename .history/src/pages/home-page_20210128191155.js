import { useState } from "react"
import "./styles.css"
import {calculate} from "../lib/calculate"


const Cities = [
  {title: "Киев", id: 1}, 
  {title: "Брюссель", id: 2},
  {title: "Пекин", id: 3}, 
  {title: "Мадрид", id: 4}, 
  {title: "Рим", id: 5} 
];

const Masses = [
  1, 2, 5, 10, 100
]

const Volumes = [
  1, 2, 5, 10, 100
]

const Directions = [
  {from: 1, to: 2, distance: 2100}, 
  {from: 1, to: 3, distance: 10000}, 
  {from: 1, to: 4, distance: 3700}, 
  {from: 1, to: 5, distance: 2400}, 
  {from: 2, to: 1, distance: 2100}, 
  {from: 2, to: 3, distance: 11400}, 
  {from: 2, to: 4, distance: 1600}, 
  {from: 2, to: 5, distance: 1500}, 
  {from: 3, to: 1, distance: 10000}, 
  {from: 3, to: 2, distance: 11400}, 
  {from: 3, to: 4, distance: 12900}, 
  {from: 3, to: 5, distance: 11600}, 
  {from: 4, to: 1, distance: 3700}, 
  {from: 4, to: 2, distance: 1600}, 
  {from: 4, to: 3, distance: 12900}, 
  {from: 4, to: 5, distance: 2000}, 
  {from: 5, to: 1, distance: 2400}, 
  {from: 5, to: 2, distance: 1500}, 
  {from: 5, to: 3, distance: 11600}, 
  {from: 5, to: 4, distance: 2000}, 
]


function HomePage() {
const [fromCity, setFromCity] = useState('');
const [toCity, setToCity] = useState('');
const [mass, setMass] = useState("");
const [volume, setVolume] = useState("");
const [date, setDate] = useState("")


const handleSubmit = (event) => { 
  event.preventDefault();

  const distance = Directions.find(d => {
    return d.from === fromCity && d.to === toCity
  })
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