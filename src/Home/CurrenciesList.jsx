import './table.scss';
import CurrencyItem from './CurrencyItem';

const CurrenciesList = ({currenciesData, isNovice, isExpert}) => {
  const currencies = currenciesData.RECORDS;
  return (
    <div className="currenciesTableContainer">
      <table className="currenciesTable">
        <colgroup>
          <col className="col col85"></col>
          <col className="col col50"></col>
          <col className="col col250"></col>
          <col className="col col200"></col>
          { isNovice || isExpert ? null : <col className="col col85"></col> }
          { isNovice ? null : <col className="col col85"></col> }
          <col className="col col85"></col>
          { isNovice ? null : 
          <col className="col col200"></col> }
          <col className="col col200"></col>
          <col className="col col200"></col>
          <col className="col col200"></col>
          <col className="col col85"></col>
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>
              <div className="theader alignCenter">#</div>
            </th>
            <th>
              <div className="theader alignLeft">Coin</div>
            </th>
            <th>
              <div className="theader alignLeft">Price</div>
            </th>
            {isNovice || isExpert ? null:
             <th>
              <div className="theader alignLeft">1h</div>
             </th>
            }
            {isNovice ? null:
             <th>
              <div className="theader alignLeft">24h</div>
             </th>
            }
            <th>
              <div className="theader alignLeft">7d</div>
            </th>
            {isNovice ? null:
             <th>
              <div className="theader alignLeft">volume(24h)</div>
             </th>
            }
            <th>
              <div className="theader alignLeft">Circulating supply</div>
            </th>
            <th>
              <div className="theader alignLeft">Max supply</div>
            </th>
            <th>
              <div className="theader alignLeft">MKT cap</div>
            </th>
            <th>
              <div className="theader alignLeft">CMC rank</div>
            </th>
          </tr>
        </thead>
        <tbody> 
          <CurrencyItem currencies={currencies} isNovice={isNovice} isExpert={isExpert}/>    
        </tbody>
      </table>
    </div>
  )
}
export default CurrenciesList;