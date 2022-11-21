import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { currencyFormat } from "../utils";

const Coin = ({ coin }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border m-4 hover:bg-gray-200 mx-auto max-w-7xl">
      <div className="flex items-center gap-1 w-full">
        <img className="w-6" src={coin.image} alt={coin.name} />
        <p className="font-bold pl-2">{coin.name}</p>
        <span className="text-sm">({coin.symbol})</span>
      </div>
      <span className="w-full text-center font-bold text-emerald-400">
        {currencyFormat(coin.current_price)}
      </span>
      <span
        className={`flex gap-1 ${
          coin.price_change_percentage_24h / 100 < 0
            ? "text-red-400"
            : "text-green-400"
        }`}
      >
        {coin.price_change_percentage_24h < 0 ? (
          <TrendingDown />
        ) : (
          <TrendingUp />
        )}
        {coin.price_change_percentage_24h.toFixed(2)} %
      </span>
      <div className="hidden sm:block">
        <p className="font-semibold">Market Cap</p>
        <span className="font-semibold">{currencyFormat(coin.market_cap)}</span>
      </div>
    </div>
  );
};

export default Coin;
