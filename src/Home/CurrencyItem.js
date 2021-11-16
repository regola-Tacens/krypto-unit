import toComaNbr from "../utils/currencyFormatter";
import star from '../assets/img/star.png';
import PropTypes from 'prop-types';

const CurrencyItem = ({ currencies, isNovice, isExpert }) => {

  return (
    <>
    {
      currencies.map((currency, index) => (
        <tr className="currenciesTable__tr" key={currency.id}>
          <td className="currenciesTable__img"><img className="currenciesTable__star" src={star} alt="star" /></td>
          <td className="currenciesTable__index">{index +1}</td>
          <td className="currenciesTable__name">{currency.name}<span className="currenciesTable__symbol">{currency.symbol}</span></td>
          <td className="currenciesTable__price">${toComaNbr(currency.price)}</td>
          { isNovice || isExpert? null :
            <td className={currency.percent_change_1h < 0 ? "currenciesTable__percent negative" : "positive currenciesTable__percent"}>{currency.percent_change_1h.toFixed(2)}%</td>
          }
           { isNovice ? null :
            <td className={currency.percent_change_24h < 0 ? "currenciesTable__percent negative" : "currenciesTable__percent positive"}>{currency.percent_change_24h.toFixed(2)}%</td>
          }
          <td className={currency.percent_change_7d < 0 ? "currenciesTable__percent negative" : "currenciesTable__percent positive"}>{currency.percent_change_7d.toFixed(2)}%</td>      
          {isNovice || isExpert ? null : <td className="currenciesTable__volume24">${toComaNbr(currency.volume_24h)}</td>}
          {isNovice || isExpert ? null :<td className="currenciesTable__circulatingSupply">${toComaNbr(currency.circulating_supply)}</td>}
          {isNovice ? null :<td className="currenciesTable__maxSupply">${toComaNbr(currency.max_supply)}</td>}
          <td className="currenciesTable__MktCap">${toComaNbr(currency.market_cap)}</td>
          {isNovice ? null :<td>{currency.cmc_rank}</td>}
        </tr>
      ))
    }
    </>
  )
}

CurrencyItem.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      cmc_rank: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      circulating_supply: PropTypes.number.isRequired,
      volume_24h: PropTypes.number.isRequired,
      percent_change_1h: PropTypes.number.isRequired,
      percent_change_24h: PropTypes.number.isRequired,
      percent_change_7d: PropTypes.number.isRequired,
      market_cap: PropTypes.number.isRequired,
      last_updated: PropTypes.string.isRequired,
      max_supply: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default CurrencyItem;