import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/f2a37237debb0e8e8f49f493/latest/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
            console.log(data);
    }, [currency])

    return data;
}

export { useCurrencyInfo };