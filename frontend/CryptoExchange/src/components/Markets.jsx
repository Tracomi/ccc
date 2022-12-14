import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  if (loading) {
    return (
      <>
        <div className="wrapper-container mt-8">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-full mt-2" />
          <Skeleton className="h-8 w-full mt-2" />
          <Skeleton className="h-8 w-full mt-2" />
          <Skeleton className="h-8 w-full mt-2" />
          <Skeleton className="h-8 w-full mt-2" />
          <Skeleton className="h-8 w-full mt-2" />
          <Skeleton className="h-8 w-full mt-2" />
        </div>
        <div className="max-w-screen mx-auto bg-green-500 ">
          <div className="scroll-text  text-white font-bold text-7xl">
            TEST TEST BIGGEST SALE TEST
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="mt-8 mx-auto max-w-7xl ">
        <h1 className="text-2xl mb-2 font-bold">
          Today <span className="bg-green-400 p-1">Crypto's</span> Prices{" "}
        </h1>
        {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </section>
      <div className="max-w-screen mx-auto bg-green-500 ">
        <div className="scroll-text  text-white text-3xl font-bold lg:text-7xl">
          TEST TEST BIGGEST SALE TEST
        </div>
      </div>
    </>
  );
};

export default Markets;
