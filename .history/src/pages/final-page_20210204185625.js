import { useEffect, useState } from "react"
import {useStoreon} from "storeon/react" 
import "../pages/styles.css"

function FinalPage({location}) {
  const {order} = useStoreon("order");
  const {vehicles} = useStoreon("vehicles");
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
  <div>
    <div className="results-title">Стоимость поездки составит {order.totalAmount} $.</div>
    <div>Выбранный транспорт<img src={imgPath}/></div>
    <div>Для дальнейшего оформления груза введите Ваши контактные данные:</div>
  </div>
  </>
)
}

export {
  FinalPage
}