function TableRow({ item }) {
  const {
    name,
    current_price,
    total_volume,
    price_change_percentage_24h,
    market_cap,
    symbol,
    image,
  } = item;
  return (
    <tr>
      <td>
        <img src={image} alt={image} />
        &nbsp;&nbsp; ${name}
      </td>
      <td>${symbol}</td>
      <td>${current_price}</td>
      <td>${total_volume}</td>
      <td>${price_change_percentage_24h}%</td>
      <td>mkt cap : ${market_cap}</td>
    </tr>
  );
}

export default TableRow;
