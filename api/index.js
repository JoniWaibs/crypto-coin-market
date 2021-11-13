const API_BASEURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export const getCoins = async () => {
  try {
    const res = await fetch(API_BASEURL);
    return await res.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};
