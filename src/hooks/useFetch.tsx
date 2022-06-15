import { useEffect, useState } from "react";
import { IData } from "../context/context-interfaces";

const useFetch = (url: string) => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [url]);

  return {
    data,
  };
};

export default useFetch;
