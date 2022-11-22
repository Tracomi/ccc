import useAxiosCoins from "../hooks/useAxiosCoins";
import Skeleton from "./Skeleton";

const Exch = () => {
  const { response, loading } = useAxiosCoins("/coins");
  console.log(response, "Success muie");

  if (loading) {
    return (
      <div className="wrapper-container mt-8 max-w-6xl mx-auto">
        <Skeleton className="h-32 w-full mt-3 max-w-6xl mx-auto" />
      </div>
    );
  }

  return (
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
                {response &&
                  response.map((coin) => (
                    <option value={coin.id} coin={coin}>
                      {coin.name}
                    </option>
                  ))}
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
                {response &&
                  response.map((coin) => (
                    <option value={coin.id} coin={coin}>
                      {coin.name}
                    </option>
                  ))}
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
  );
};

export default Exch;
