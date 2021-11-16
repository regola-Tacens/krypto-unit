const globalMarketCap = (currenciesData) => {
  let globalMktCap = 0;
  currenciesData.RECORDS.forEach((currency) => {
    globalMktCap += currency.market_cap;
  });
  const nbr = globalMktCap.toString();
  const suffix = nbr.slice(-12);
  const prefix = nbr.substring(0, nbr.length - 12);
  globalMktCap = Number(prefix + "." + suffix);
  return globalMktCap.toFixed(2);
};

export default globalMarketCap