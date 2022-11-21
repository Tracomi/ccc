import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchDataCall = async ({ api }) => {
  let apiReturn = await axios
    .get("http://localhost:5000/api/coins")
    .then(async function (response) {
      console.log(response, "Success");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiReturn;
};

const ApiComponent = ({ api }) => {
  const [date, setData] = useState("");

  useEffect(() => {
    const fetchData = async (api) => {
      let response = await fetchDataCall({
        api: "http://localhost:5000/api/coins",
      });
      setData(response);
    };

    fetchData(api);
  }, []);

  return (
    <>
      <section className="mx-auto max-w-7xl ">
        <form className="card mr-8">
          <div className=" bg-white border-gray-800 shadow-2xl rounded-xl mt-4  card-body">
            <h2 className="font-bold text-2xl mb-4">Exchange Form</h2>
            <div className="flex items-center justify-between">
              <div className="relative">
                <input
                  type="number"
                  step="0.00000001"
                  placeholder="1.2"
                  className="border-gray-200 border font-semibold text-center text-md"
                />
                <select
                  name="fromCurrency"
                  id="fromCurrency"
                  className="border-gray-200 border pl-0 font-semibold text-center text-md"
                >
                  <option value="test">test</option>
                </select>
              </div>
              <img
                src="https://coinchange.to/images/arows.svg"
                alt=""
                srcset=""
                className="w-1/8"
              />
              <div className="relative">
                <input
                  type="number"
                  step="0.00000001"
                  value=""
                  className="border-gray-200 border font-semibold text-center text-md"
                  placeholder="1.2"
                />
                <select
                  name="fromCurrency"
                  id="fromCurrency"
                  className="border-gray-200 border pl-0 font-semibold text-center text-md"
                >
                  <option value="ZRX">0x (ERC20)</option>
                  <option value="AVAX">Avalanche</option>
                  <option value="BAT">Basic Attention (ERC20)</option>
                  <option value="BNB">Binance Chain</option>
                  <option value="BSC">Binance Smart Chain</option>
                  <option value="BUSD">Binance USD (BEP2)</option>
                  <option value="BUSDBSC">Binance USD (BEP20)</option>
                  <option value="BUSDETH">Binance USD (ERC20)</option>
                  <option value="BTC">Bitcoin</option>
                  <option value="BTCBNB">Bitcoin (BEP2)</option>
                  <option value="BTCBSC">Bitcoin (BEP20)</option>
                  <option value="BTCLN">Bitcoin (Lightning)</option>
                  <option value="BCH">Bitcoin Cash</option>
                  <option value="BTT">BitTorrent</option>
                  <option value="ADA">Cardano</option>
                  <option value="ADABNB">Cardano (BEP2)</option>
                  <option value="ADABSC">Cardano (BEP20)</option>
                  <option value="LINK">Chainlink (ERC20)</option>
                  <option value="ATOM">Cosmos</option>
                  <option value="DAIBSC">DAI (BEP20)</option>
                  <option value="DAIETH">DAI (ERC20)</option>
                  <option value="DAIMATIC">DAI (POLYGON)</option>
                  <option value="DASH">Dash</option>
                  <option value="DOGE">Dogecoin</option>
                  <option value="ETH">Ethereum</option>
                  <option value="ETHBNB">Ethereum (BEP2)</option>
                  <option value="ETHBSC">Ethereum (BEP20)</option>
                  <option value="ETC">Ethereum Classic</option>
                  <option value="LTC">Litecoin</option>
                  <option value="MKR">Maker (ERC20)</option>
                  <option value="XMR">Monero</option>
                  <option value="CAKE">PancakeSwap (BEP20)</option>
                  <option value="USDP">Pax Dollar (ERC20)</option>
                  <option value="PAX">Paxos Standard</option>
                  <option value="DOT">Polkadot</option>
                  <option value="MATICETH">Polygon (ERC20)</option>
                  <option value="MATIC">Polygon (POLYGON)</option>
                  <option value="XRP">Ripple</option>
                  <option value="SHIBBSC">SHIBA INU (BEP20)</option>
                  <option value="SHIB">SHIBA INU (ERC20)</option>
                  <option value="SOL">Solana</option>
                  <option value="XLM">Stellar Lumens</option>
                  <option value="USTBSC">TerraUSD (BEP20)</option>
                  <option value="USDTBNB">Tether (BEP2)</option>
                  <option value="USDTBSC">Tether (BEP20)</option>
                  <option value="USDT">Tether (ERC20)</option>
                  <option value="USDTMATIC">Tether (POLYGON)</option>
                  <option value="USDTSOL">Tether (Solana)</option>
                  <option value="USDTTRC">Tether (TRC20)</option>
                  <option value="XTZ">Tezos</option>
                  <option value="TRX">Tron</option>
                  <option value="TUSD">TrueUSD (ERC20)</option>
                  <option value="TWT">Trust Wallet Token (BEP2)</option>
                  <option value="USDCBSC">USD Coin (BEP20)</option>
                  <option value="USDC2">USD Coin (ERC20)</option>
                  <option value="USDCETH">USD Coin (ERC20)</option>
                  <option value="USDCMATIC">USD Coin (POLYGON)</option>
                  <option value="USDCSOL">USD Coin (Solana)</option>
                  <option value="USDCTRC">USD Coin (TRC20)</option>
                  <option value="ZEC">Zcash</option>
                </select>
              </div>
            </div>
            <div className=" bg-gray-400">
              <input
                type="text"
                name=""
                id=""
                className="w-full text-center font-bold text-md"
                placeholder="Your Address"
              />
            </div>
            <button className="btn btn-primary mx-auto font-bold text-lg">
              Exchange
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ApiComponent;
