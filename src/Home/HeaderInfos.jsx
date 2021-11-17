import toComaNbr from "../utils/currencyFormatter"

const HeaderInfos = ( {currenciesData}) => {

  const coins = currenciesData.length

  let mktCap=0
  currenciesData.forEach( currency => mktCap+=currency.market_cap )

  let vol24h=0
  currenciesData.forEach( currency => vol24h+=currency.volume_24h )

  return(
    <div className="headerInfos">
    <div className="headerInfos__item">Coins: <span>{coins}</span> </div>
    <div className="headerInfos__item">Market Cap: <span>${toComaNbr(mktCap)}</span></div>
    <div className="headerInfos__item">24h Vol: <span>${toComaNbr(vol24h)}</span></div>
  </div>
  )
}

export default HeaderInfos;