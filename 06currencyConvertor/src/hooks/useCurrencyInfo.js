import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
    )
      .then(res.json())
      .then(res.res.setData(res[currency]));
    console.log(data);
  }, [currency]);
}
