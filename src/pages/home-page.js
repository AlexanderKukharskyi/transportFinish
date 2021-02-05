import { useState } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"
import {Cities} from "../data/Cities"
import {Directions} from "../data/Directions"
import {Masses} from "../data/Masses"
import {Volumes} from "../data/Volumes"


function HomePage(props) {
const {dispatch} = useStoreon("order");
const{ dispatch: DataDispatch}=useStoreon('data')
const [fromCity, setFromCity] = useState('');
const [toCity, setToCity] = useState('');
const [mass, setMass] = useState(1);
const [volume, setVolume] = useState(1);
const [date, setDate] = useState("")


const handleSubmit = (event) => { 
  event.preventDefault()
  ;
  DataDispatch("data/setData", fromCity, toCity, mass, volume, date )
  const result = Directions.find(d => {
    return d.from === +fromCity && d.to === +toCity

  })
  dispatch("data/setData", {
    fromCity: fromCity,
    toCity: toCity,
    mass: mass,
    volume: volume,
    date: date,
  })
  dispatch("order/setTotalAmount", {
    distance: result.distance,
    mass,
    volume
  })
  props.history.push('/results')
}

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="request-form__item">
        <span className="request-form__label">Откуда:</span>
        <select onChange={(event) => setFromCity(event.target.value)} value={fromCity} required> 
          <option disabled value="">Выбери</option>
          {Cities.map(city => <option key={city.id} value={city.id} disabled={city.id === +toCity}>{city.title}</option>)}
        </select>
      </div>

      <div className="request-form__item">
        <span className="request-form__label">Куда:</span>
        <select onChange={(event) => setToCity(event.target.value)} value={toCity} required> 
        <option disabled value="">Выбери</option>
        {Cities.map(city => <option key={city.id}  value={city.id} disabled={city.id === +fromCity}>{city.title}</option>)}
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