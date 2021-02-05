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
  {from: "Киев", to: "Брюссель", distance: 2100}, 
  {from: "Киев", to: "Пекин", distance: 10000}, 
  {from: "Киев", to: "Мадрид", distance: 3700}, 
  {from: "Киев", to: "Рим", distance: 2400}, 
  {from: "Брюссель", to: "Киев", distance: 2100}, 
  {from: "Брюссель", to: "Пекин", distance: 11400}, 
  {from: "Брюссель", to: "Мадрид", distance: 1600}, 
  {from: "Брюссель", to: "Рим", distance: 1500}, 
  {from: "Пекин", to: "Киев", distance: 10000}, 
  {from: "Пекин", to: "Брюссель", distance: 11400}, 
  {from: "Пекин", to: "Мадрид", distance: 12900}, 
  {from: "Пекин", to: "Рим", distance: 11600}, 
  {from: "Мадрид", to: "Киев", distance: 3700}, 
  {from: "Мадрид", to: "Брюссель", distance: 1600}, 
  {from: "Мадрид", to: "Пекин", distance: 12900}, 
  {from: "Мадрид", to: "Рим", distance: 2000}, 
  {from: "Рим", to: "Киев", distance: 2400}, 
  {from: "Рим", to: "Брюссель", distance: 1500}, 
  {from: "Рим", to: "Пекин", distance: 11600}, 
  {from: "Рим", to: "Мадрид", distance: 2000}, 
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
        
        <button onСlick="document.location='page/new.html'" className="request-form__submit--button">Рассчитать</button>
      </div>
    </form>
    
  )

}

export {
  HomePage
}