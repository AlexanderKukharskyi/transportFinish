import { useState } from "react"
import "./styles.css"

function HomePage() {
const [disabled, setDisabled] = useState(false);

  return (
    <form className="request-form">
      <div className=" request-form__item">
        <span className=" request-form__label">Откуда:</span>
        <select onChange={setDisabled(true)}>
              <option disabled={!disabled}>Выбери</option>
              <option>Киев</option>
              <option>Брюссель</option>
              <option>Пекин</option>
              <option>Мадрид</option>
              <option>Рим</option>
        </select>
      </div>

      <div className=" request-form__item">
        <span className=" request-form__label">Куда:</span>
        <select>
              <option disabled>Выбери</option>
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