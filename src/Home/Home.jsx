import { useState } from 'react';
import CurrenciesList from "./CurrenciesList";
import HomeTitle from "./HomeTitle";
import "./index.scss";
import UserLevel from "./UserLevel";
import currenciesData from "../data/coinmarket_app_20211115.json";
import globalMarketCap from "../utils/globalMktCalculator";

function Home() {
  const [isNovice, setIsNovice] =useState(false)
  const [isExpert, setIsExpert] =useState(false)

  const handleNoviceEvent = () => {
    setIsNovice(true)
    setIsExpert(false)
  }
  const handleExpertEvent = () => {
    setIsExpert(true)
    setIsNovice(false)
  }
  const handleExperiencedEvent = () => {
    setIsExpert(false)
    setIsNovice(false)
  }
  return (
    <div className="home">
      {JSON.stringify(isNovice)}
      {JSON.stringify(isExpert)}
      <HomeTitle globalMarketCap={globalMarketCap(currenciesData)}/>
      <UserLevel onNoviceBtn={handleNoviceEvent} onExpertBtn={handleExpertEvent} onExperiencedBtn={handleExperiencedEvent}/>
      <CurrenciesList currenciesData={currenciesData} isNovice={isNovice} isExpert={isExpert} />
    </div>
  );
}

export default Home;
