import "./table.scss";
import CurrencyItem from "./CurrencyItem";

const CurrenciesList = ({
  sortedCurrencies,
  isNovice,
  isExpert,
  sortOnPrice,
  sortOnCoin,
  sortOn1h,
  sortOn24h,
  sortOn7d,
  sortOnVolume,
  sortOnCirculatingSupply,
  sortOnMaxSupply,
  sortOnMktCap,
  sortOnCmcRank,
  page,
  rows
}) => {
  const currencies = sortedCurrencies;
  return (
    <div className="currenciesTableContainer">
      <table className="currenciesTable">
        <colgroup>
          <col className="col col85"></col>
          <col className="col col50"></col>
          <col className="col col250"></col>
          <col className="col col200"></col>
          {isNovice || isExpert ? null : <col className="col col85"></col>}
          {isNovice ? null : <col className="col col85"></col>}
          <col className="col col85"></col>
          {isNovice || isExpert ? null : <col className="col col200"></col>}
          {isNovice || isExpert ? null : <col className="col col200"></col>}
          {isNovice ? null : <col className="col col200"></col>}
          <col className="col col200"></col>
          {isNovice ? null : <col className="col col85"></col>}
        </colgroup>
        <thead>
          <tr>
            <th>
              <div className="theader alignCenter"></div>
            </th>
            <th>
              <div className="theader alignCenter">
                <p className="theader__index" onClick={sortOnCoin}>
                  #
                </p>
              </div>
            </th>
            <th>
              <div className="theader alignLeft">
                <p className="theader__text" onClick={sortOnCoin}>
                  Coin
                </p>
              </div>
            </th>
            <th>
              <div className="theader alignLeft">
                <p className="theader__text" onClick={sortOnPrice}>
                  Price
                </p>
              </div>
            </th>
            {isNovice || isExpert ? null : (
              <th>
                <div className="theader alignLeft">
                  <p className="theader__text" onClick={sortOn1h}>
                    1h
                  </p>
                </div>
              </th>
            )}
            {isNovice ? null : (
              <th>
                <div className="theader alignLeft">
                  <p className="theader__text" onClick={sortOn24h}>
                    24h
                  </p>
                </div>
              </th>
            )}
            <th>
              <div className="theader alignLeft">
                <p className="theader__text" onClick={sortOn7d}>
                  7d
                </p>
              </div>
            </th>
            {isNovice || isExpert ? null : (
              <th>
                <div className="theader alignLeft">
                  <p className="theader__text" onClick={sortOnVolume}>
                    Volume(24h)
                  </p>
                </div>
              </th>
            )}
            {isNovice || isExpert ? null : (
              <th>
                <div className="theader alignLeft">
                  <p className="theader__text" onClick={sortOnCirculatingSupply}>
                      Circulating supply
                  </p>
                </div>
              </th>
            )}
            {isNovice ? null : (
              <th>
                <div className="theader alignLeft">
                  <p className="theader__text" onClick={sortOnMaxSupply}>
                      Max supply
                  </p>
                </div>
              </th>
            )}
            <th>
              <div className="theader alignLeft">
                <p className="theader__text" onClick={sortOnMktCap}>
                      MKT cap
                </p>
              </div>
            </th>
            {isNovice ? null : (
              <th>
                <div className="theader alignLeft">
                  <p className="theader__text" onClick={sortOnCmcRank}>
                        CMC rank
                  </p>
                </div>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <CurrencyItem
            currencies={currencies}
            isNovice={isNovice}
            isExpert={isExpert}
            page={page}
            rows={rows}
          />
        </tbody>
      </table>
    </div>
  );
};
export default CurrenciesList;
