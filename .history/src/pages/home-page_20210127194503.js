import { useState } from "react"
import "./styles.css"

function HomePage() {
const [disabled, setDisabled] = useState(false);

const Cities = [
  {title: "Киев"}, 
  {title: "Брюссель"},
  {title: "Пекин"}, 
  {title: "Мадрид"}, 
  {title: "Рим"} 
];

const Directions = [
  {from: "Киев", to: "Брюссель"}, 
  {from: "Киев", to: "Пекин"}, 
  {from: "Киев", to: "Мадрид"}, 
  {from: "Киев", to:  "Рим"}, 
  {from: "Брюссель", to: "Киев"}, 
  {from: "Брюссель", to: "Пекин"}, 
  {from: "Брюссель", to: "Мадрид"}, 
  {from: "Брюссель", to: "Рим"}, 
  {from: "Пекин", to: "Киев"}, 
  {from: "Пекин", to: "Брюссель"}, 
  {from: "Пекин", to: "Мадрид"}, 
  {from: "Пекин", to: "Рим"}, 
  {from: "Мадрид", to: "Киев"}, 
  {from: "Мадрид", to: "Брюссель"}, 
  {from: "Мадрид", to: "Пекин"}, 
  {from: "Мадрид", to: "Рим"}, 
  {from: "Рим", to: "Киев"}, 
  {from: "Рим", to: "Брюссель"}, 
  {from: "Рим", to: "Пекин"}, 
  {from: "Рим", to: "Мадрид"}, 
  // {from: "Киев", to: "Брюссель"}, 2100 km
  // {from: "Киев", to: "Пекин"}, 10000 km
  // {from: "Киев", to: "Мадрид"}, 3700 km
  // {from: "Киев", to:  "Рим"}, 2400 km
  // {from: "Брюссель", to: "Киев"}, 2100 km
  // {from: "Брюссель", to: "Пекин"}, 11400 km
  // {from: "Брюссель", to: "Мадрид"}, 1600 km
  // {from: "Брюссель", to: "Рим"}, 1500 km
  // {from: "Пекин", to: "Киев"}, 10000 km
  // {from: "Пекин", to: "Брюссель"}, 11400 km
  // {from: "Пекин", to: "Мадрид"}, 12900 km
  // {from: "Пекин", to: "Рим"}, 11600 km
  // {from: "Мадрид", to: "Киев"}, 3700 km
  // {from: "Мадрид", to: "Брюссель"}, 1600 km
  // {from: "Мадрид", to: "Пекин"}, 12900 km
  // {from: "Мадрид", to: "Рим"}, 2000 km
  // {from: "Рим", to: "Киев"}, 2400 km
  // {from: "Рим", to: "Брюссель"}, 1500 km
  // {from: "Рим", to: "Пекин"}, 11600 km
  // {from: "Рим", to: "Мадрид"}, 2000 km
]

  return (
    <form className="request-form">
      <div className=" request-form__item">
        <span className=" request-form__label">Откуда:</span>
        <select onChange={() => setDisabled(true)}>
              <option disabled={disabled}>Выбери</option>
              <option value="Киев">Киев</option>
              <option value="Брюссель">Брюссель</option>
              <option value="Пекин">Пекин</option>
              <option value="Мадрид" >Мадрид</option>
              <option value="Рим">Рим</option>
        </select>
      </div>

      <div className=" request-form__item">
        <span className=" request-form__label">Куда:</span>
        <select>
        <option disabled={disabled}>Выбери</option>
              <option>Киев</option>
              <option>Брюссель</option>
              <option>Пекин</option>
              <option>Мадрид</option>
              <option>Рим</option>
        </select>
      </div>

      <div className=" request-form__item">
        <span className=" request-form__label">Дата:</span>
        <input className=" request-form__text" type="date"/>
      </div>

      <div className=" request-form__item">
          <span className=" request-form__label">Масса, тн:</span>

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
        <button className="request-form__submit--button">Найти</button>
      </div>


    </form>
  )

}

export {
  HomePage
}