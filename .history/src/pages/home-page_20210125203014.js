function HomePage() {
  return (
    <form>
      <div>
        <span>Откуда:</span>
        <input type="text"/>
      </div>
      <div>
        <span>Куда:</span>
        <input type="text"/>
      </div>
      <div>
        <span>Дата:</span>
        <input type="date"/>
      </div>
      <div>
          <span>Масса:</span>
            <Select>
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
              <option>100</option>
              <Select/>
      </div>

      


    </form>
  )
}

export {
  HomePage
}