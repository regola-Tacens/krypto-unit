import './index.scss';

const HomeTitle = ({globalMarketCap}) => {

  return (
    <div className="mainTitle">
      <h1 className="mainTitle__hero">Cryptocurrency Prices by Market Cap</h1>
      <p className="mainTitle__baseline">The global cryptocurrency market cap today is ${globalMarketCap} Million, a 1.8% change in the last 24 hours</p>
      {/* <div>Highlight</div> */}
    </div>
  )
}

export default HomeTitle;