import "./App.css";
import TableRow from "./Components/TableRow";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  // fetching data from the api at initial render
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const d = await response.json();
      setData(d);
    }
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Total Volume</th>
          <th>Price Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody className="container">
        {data.map((d, index) => (
          <TableRow key={index} item={d} />
        ))}
      </tbody>
    </table>
  );
}

export default App;
