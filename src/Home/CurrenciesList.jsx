import './table.scss';
import data from '../data/coinmarket_app_20211115.json';
import toComaNbr from '../utils/currencyFormatter';

const CurrenciesList = () => {
  const currencies = data.RECORDS;
  return (
    <div className="currenciesTableContainer">
      {/* {JSON.stringify(data.RECORDS)} */}
      <table className="currenciesTable">
        <colgroup>
          <col></col>
          <col className="col col50"></col>
          <col className="col col250"></col>
          <col className="col col200"></col>
          <col className="col col85"></col>
          <col className="col col85"></col>
          <col className="col col85"></col>
          <col className="col col200"></col>
          <col className="col col200"></col>
          <col className="col col200"></col>
          <col className="col col200"></col>
          <col className="col col85"></col>
          <col className="col col200"></col>
        </colgroup>
        <tr>
          <th></th>
          <th>#</th>
          <th>
            <div className="theader alignLeft">Coin</div>
          </th>
          <th>
            <div className="theader alignLeft">Price</div>
          </th>
          <th>
            <div className="theader alignLeft">1h</div>
          </th>
          <th>
            <div className="theader alignLeft">24h</div>
          </th>
          <th>
            <div className="theader alignLeft">7d</div>
          </th>
          <th>
            <div className="theader alignLeft">volume(24h)</div>
          </th>
          <th>Circulating supply</th>
          <th>Max supply</th>
          <th>Mkt cap</th>
          <th>CMC</th>
          <th>Updated</th>
        </tr>
        <tbody>     
            {
              currencies.map((currency) => (
                <tr>
                  <td></td>
                  <td></td>
                  <td className="currenciesTable__name">{currency.name}<span className="currenciesTable__symbol">{currency.symbol}</span></td>
                  <td>${toComaNbr(currency.price)}</td>
                  <td className={currency.percent_change_1h < 0 ? "negative" : "positive"}>{currency.percent_change_1h.toFixed(2)}%</td>
                  <td className={currency.percent_change_24h < 0 ? "negative" : "positive"}>{currency.percent_change_24h.toFixed(2)}%</td>
                  <td className={currency.percent_change_7d < 0 ? "negative" : "positive"}>{currency.percent_change_7d.toFixed(2)}%</td>      
                  <td>${toComaNbr(currency.volume_24h)}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}
export default CurrenciesList;