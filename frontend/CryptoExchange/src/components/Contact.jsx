import { useState, useEffect } from "react";
import axios from "axios";
import about_us from "/src/assets/image_8.png";

function Coins() {
  // const [getCoins, setGetCoins] = useState([]);

  // useEffect(() => {
  //   async function fetchCoins() {
  //     const URL = `http://localhost:5000/api/coins`;
  //     try {
  //       const res = await axios.get(URL);
  //       console.log(res.data);
  //       setGetCoins(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchCoins();
  // }, []);

  return (
    <>
      <section className="text-gray-600 body-font max-w-7xl mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <p className="text-7xl font-black">1</p>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font mb-2 font-bold">
                Choose any crypto
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font mb-2 font-bold">
                Send your crypto
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <p className="text-7xl font-black">2</p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <p className="text-7xl font-black">3</p>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font mb-2 font-bold">
                Receive your crypto
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mx-auto max-w-6xl mt-12 ">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center card bg-base-200">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center card-body ">
            <h1 className="title-font sm:text-2xl text-xl mb-4 font-bold text-gray-900">
              Contact Us
            </h1>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="btn btn-primary font-bold">Button</button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center bg-base-200 rounded"
              alt="hero"
              src={about_us}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Coins;
