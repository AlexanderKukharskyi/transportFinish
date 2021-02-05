import { useEffect, useState } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage({location}) {
  const {order} = useStoreon("order");
  const {vehicles} = useStoreon("vehicles");
  const {data} = useStoreon("data");
  const [imgPath, setImgPath] = useState('');

  useEffect(() => {
    const item = vehicles.vehiclesOption.find(i => i.id === location.state.imgId);

    if (item) {
      setImgPath(item.path)
    }
  }, [location.state, vehicles.vehiclesOption])

  console.log(order)

return (
  <>
  <div className="final">
    <div></div>
    <div className="final-description"> Вы выбрали направление 
      <span className="final-description--special">` {data.fromCity} - {data.fromCity} `</span>
    </div>
    <div className="final-description"> Ваш груз 
      <span className="final-description--special"> {data.mass} тн, {data.volume} м3</span>
    </div>
    <div className="final-description"> Дата рейса 
      <span className="final-description--special"> {data.date}</span>
    </div>
    <div className="final-description"> Стоимость поездки составит 
      <span className="final-description--special"> {order.totalAmount} $.</span>
    </div>
    <div className="final-description"> Выбранный транспорт:
      <img className="final-image" src={imgPath}/>
    </div>
    <div className="final-description"> Для дальнейшего оформления груза введите Ваши контактные данные:
      <input/>
    </div>
  </div>
  </>
)
}

export {
  FinalPage
}