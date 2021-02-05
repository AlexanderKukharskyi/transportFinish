function HomePage() {
  return (
    <form className="request-form">
      <div className="request-form__item">
        <span className="request-form__label">Откуда:</span>
        <input className="request-form__" type="text"/>
      </div>

      <div className="request-form__item">
        <span className="request-form__label">Куда:</span>
        <input type="text"/>
      </div>

      <div className="request-form__item">
        <span className="request-form__label">Дата:</span>
        <input type="date"/>
      </div>

      <div className="request-form__item">
          <span className="request-form__label">Масса:</span>

            <select>
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
              <option>100</option>
            </select>
      </div> 

      <div className="request-form__item">
          <span className="request-form__label">Обьем:</span>
            
            <select>
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
              <option>100</option>
            </select>

      </div>

    </form>
  )

}

export {
  HomePage
}