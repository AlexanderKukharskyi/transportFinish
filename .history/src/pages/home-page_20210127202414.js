import { useState } from "react"
import "./styles.css"
import {calculate} from "../lib/calculate"


function HomePage() {
const [disabled, setDisabled] = useState(false);

const Cities = [
  {title: "Киев", id: 1}, 
  {title: "Брюссель", id: 2},
  {title: "Пекин", id: 3}, 
  {title: "Мадрид", id: 4}, 
  {title: "Рим", id: 5} 
];

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

const handleSubmit = (event) => { 
  event.preventDefault();
}

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="request-form__item">
        <span className="request-form__label">Откуда:</span>
        <select onChange={() => setDisabled(true)}>
          <option disabled={disabled}>Выбери</option>
          {Cities.map(city => <option key={city.id} value={city.id}>{city.title}</option>)}
        </select>
      </div>

      <div className="request-form__item">
        <span className="request-form__label">Куда:</span>
        <select onChange={() => setDisabled(true)}>
        <option disabled={disabled}>Выбери</option>
        {Cities.map(city => <option key={city.id} value={city.id}>{city.title}</option>)}
        </select>
      </div>

      <div className="request-form__item">
        <span className="request-form__label">Дата:</span>
        <input className="request-form__text" type="date"/>
      </div>

      <div className="request-form__item">
          <span className="request-form__label">Масса, тн:</span>

            <select>
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
              <option>100</option>
            </select>
      </div> 

      <div className="request-form__item">
          <span className="request-form__label">Обьем, м3:</span>
            
            <select>
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
              <option>100</option>
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