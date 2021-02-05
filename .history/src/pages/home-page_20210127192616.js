import { useState } from "react"
import "./styles.css"

function HomePage() {
const [disabled, setDisabled] = useState(false);

const Cities = [
  {title: "Киев"}; 
  {title: "Брюссель"};
  {title: "Пекин"}; 
  {title: "Мадрид"}; 
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
]

  return (
    <form className="request-form">
      <div className=" request-form__item">
        <span className=" request-form__label">Откуда:</span>
        <select onChange={() => setDisabled(true)}>
              <option disabled={disabled}>Выбери</option>
              <option value="1">Киев</option>
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