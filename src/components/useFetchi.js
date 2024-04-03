import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useFetchi(url) {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  return {data}
}