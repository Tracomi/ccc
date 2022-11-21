import { useState, useEffect } from "react";
import axios from "axios";

function Birds(props) {
  const [getBirds, setGetBirds] = useState([]);

  useEffect(() => {
    async function fetchBirds() {
      const URL = `http://localhost:5000/api/coins`;
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setGetBirds(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBirds();
  }, []);

  return (
    <>
      <div>{getBirds.id}</div>
      <div>{getBirds.litecoin} </div>
    </>
  );
}

export default Birds;
