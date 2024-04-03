import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useFetchi() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  return {data}
}