
const PageSelector = ({ handleSelectRow, handlePreviousPage, handleNextPage, numberOfCurrencies }) => {
  return (
    <div className="home__btnContainer">
      <div className="select is-small">
        <select name="currencyQuantity" onChange={handleSelectRow}>
          <option value="">Show rows</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value={numberOfCurrencies}>All</option>
        </select>
      </div>
      <button className="home__btnContainer__pageButton" onClick={handlePreviousPage}>-</button>
      <button className="home__btnContainer__pageButton" onClick={handleNextPage}>+</button>
    </div>
  )
}

export default PageSelector;
