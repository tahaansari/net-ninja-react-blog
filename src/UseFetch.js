import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("component got render");
    setTimeout(() => {
      const data = fetch(url);
      data
        .then((response) => {
          if (!response.ok) {
            throw new Error("could not find the data");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
          console.log(err.message);
        });
    }, 1000);

    return () => console.log("cleanup");
  }, [url]);
  return { data, isPending, error };
};

export default UseFetch;
