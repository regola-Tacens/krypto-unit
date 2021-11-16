import toComaNbr from "../utils/currencyFormatter";
import star from '../assets/img/star.png';
import PropTypes from 'prop-types';

const CurrencyItem = ({ currencies, isNovice, isExpert }) => {

  return (
    <>
    {
      currencies.map((currency, index) => (
        <tr key={currency.id}>
          <td><img className="currenciesTable__star" src={star} alt="star" /></td>
          <td className="currenciesTable__index">{index +1}</td>
          <td className="currenciesTable__name">{currency.name}<span className="currenciesTable__symbol">{currency.symbol}</span></td>
          <td>${toComaNbr(currency.price)}</td>
          { isNovice || isExpert? null :
            <td className={currency.percent_change_1h < 0 ? "negative" : "positive"}>{currency.percent_change_1h.toFixed(2)}%</td>
          }
           { isNovice ? null :
            <td className={currency.percent_change_24h < 0 ? "negative" : "positive"}>{currency.percent_change_24h.toFixed(2)}%</td>
          }
          <td className={currency.percent_change_7d < 0 ? "negative" : "positive"}>{currency.percent_change_7d.toFixed(2)}%</td>      
          {isNovice ? null :
            <td>${toComaNbr(currency.volume_24h)}</td>
          }
          <td>${toComaNbr(currency.circulating_supply)}</td>
          <td>${toComaNbr(currency.max_supply)}</td>
          <td>${toComaNbr(currency.market_cap)}</td>
          <td>{currency.cmc_rank}</td>
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