import { useState } from "react";
import CurrenciesList from "./CurrenciesList";
import HomeTitle from "./HomeTitle";
import "./index.scss";
import UserLevel from "./UserLevel";
import currenciesData from "../data/coinmarket_app_20211115.json";
import globalMarketCap from "../utils/globalMktCalculator";
import ScrollUp from "./ScrollUp";
import PageSelector from "./PageSelector";
import HeaderInfos from "./HeaderInfos";

function Home() {
  const [isNovice, setIsNovice] = useState(false);
  const [isExpert, setIsExpert] = useState(true);
  const [isExperienced, setIsExperienced] = useState(false);
  const [sortedCurrencies, sortCurrencies] = useState(currenciesData.RECORDS);
  const [isSortedByIncreasingPrice, sortByPrice] = useState(false);
  const [isSortedByIncreasingCoin, sortByCoin] = useState(false);
  const [isSortedByIncreasing1h, sortBy1h] = useState(false);
  const [isSortedByIncreasing24h, sortBy24h] = useState(false);
  const [isSortedByIncreasing7d, sortBy7d] = useState(false);
  const [isSortedByIncreasingVolume, sortByVolume] = useState(false);
  const [isSortedByCirculatingSupply, sortByCirculatingSupply] =
    useState(false);
  const [isSortedByMaxSupply, sortByMaxSupply] = useState(false);
  const [isSortedByMktCap, sortByMktCap] = useState(false);
  const [isSortedByMcmRank, sortByMcmRank] = useState(false);
  const [page, setpage] = useState(0);
  const [rows, setrows] = useState(239);

  const handleNoviceEvent = () => {
    setIsExperienced(false);
    setIsNovice(true);
    setIsExpert(false);
  };
  const handleExpertEvent = () => {
    setIsExperienced(false);
    setIsExpert(true);
    setIsNovice(false);
  };
  const handleExperiencedEvent = () => {
    setIsExperienced(true);
    setIsExpert(false);
    setIsNovice(false);
  };
  const handleSortprice = () => {
    isSortedByIncreasingPrice
      ? sortCurrencies(
          currenciesData.RECORDS.sort((a, b) => (a.price > b.price && 1) || -1)
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort((a, b) => (a.price < b.price && 1) || -1)
        );
    sortByPrice((prevState) => !prevState);
  };
  const handleSortCoin = () => {
    isSortedByIncreasingCoin
      ? sortCurrencies(
          currenciesData.RECORDS.sort((a, b) => (a.name > b.name && 1) || -1)
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort((a, b) => (a.name < b.name && 1) || -1)
        );
    sortByCoin((prevState) => !prevState);
  };
  const handleSort1h = () => {
    isSortedByIncreasing1h
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.percent_change_1h > b.percent_change_1h && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.percent_change_1h < b.percent_change_1h && 1) || -1
          )
        );
    sortBy1h((prevState) => !prevState);
  };
  const handleSort24h = () => {
    isSortedByIncreasing24h
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.percent_change_24h > b.percent_change_24h && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.percent_change_24h < b.percent_change_24h && 1) || -1
          )
        );
    sortBy24h((prevState) => !prevState);
  };
  const handleSort7d = () => {
    isSortedByIncreasing7d
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.percent_change_7d > b.percent_change_7d && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.percent_change_7d < b.percent_change7d && 1) || -1
          )
        );
    sortBy7d((prevState) => !prevState);
  };
  const handleSortVolume = () => {
    isSortedByIncreasingVolume
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.volume_24h > b.volume_24h && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.volume_24h < b.volume_24h && 1) || -1
          )
        );
    sortByVolume((prevState) => !prevState);
  };
  const handleCirculatingSupply = () => {
    isSortedByCirculatingSupply
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.circulating_supply > b.circulating_supply && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.circulating_supply < b.circulating_supply && 1) || -1
          )
        );
    sortByCirculatingSupply((prevState) => !prevState);
  };
  const handleMaxSupply = () => {
    isSortedByMaxSupply
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.max_supply > b.max_supply && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.max_supply < b.max_supply && 1) || -1
          )
        );
    sortByMaxSupply((prevState) => !prevState);
  };
  const handleMktCap = () => {
    isSortedByMktCap
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.market_cap > b.market_cap && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.market_cap < b.market_cap && 1) || -1
          )
        );
    sortByMktCap((prevState) => !prevState);
  };
  const sortOnCmcRank = () => {
    isSortedByMcmRank
      ? sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.cmc_rank > b.cmc_rank && 1) || -1
          )
        )
      : sortCurrencies(
          currenciesData.RECORDS.sort(
            (a, b) => (a.cmc_rank < b.cmc_rank && 1) || -1
          )
        );
    sortByMcmRank((prevState) => !prevState);
  };
  const handleSelectRow = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setpage(0);
    setrows(Number(e.target.value));
  };
  const handleNextPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    page * rows + rows < sortedCurrencies.length && setpage(page + 1);
  };
  const handlePreviousPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    page >= 1 && setpage(page - 1);
  };

  return (
    <div className="home">
      <ScrollUp />
      <HeaderInfos currenciesData= {currenciesData.RECORDS}/>
      <HomeTitle globalMarketCap={globalMarketCap(sortedCurrencies)} />
      <UserLevel
        onNoviceBtn={handleNoviceEvent}
        onExpertBtn={handleExpertEvent}
        onExperiencedBtn={handleExperiencedEvent}
        isNovice={isNovice}
        isExpert={isExpert}
        isExperienced={isExperienced}
      />
      <CurrenciesList
        sortedCurrencies={sortedCurrencies}
        isNovice={isNovice}
        isExpert={isExpert}
        sortOnPrice={handleSortprice}
        sortOnCoin={handleSortCoin}
        sortOn1h={handleSort1h}
        sortOn24h={handleSort24h}
        sortOn7d={handleSort7d}
        sortOnVolume={handleSortVolume}
        sortOnCirculatingSupply={handleCirculatingSupply}
        sortOnMaxSupply={handleMaxSupply}
        sortOnMktCap={handleMktCap}
        sortOnCmcRank={sortOnCmcRank}
        page={page}
        rows={rows}
      />
      <PageSelector
        handleSelectRow={handleSelectRow}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}

export default Home;
