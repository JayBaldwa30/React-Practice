import axios from "axios";
import { useEffect, useState } from "react";

function Display() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log("error fetching data", err));
  }, []);

  return (
    <>
      <div>Display</div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

export default Display;
