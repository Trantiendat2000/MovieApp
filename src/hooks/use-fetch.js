import { useEffect } from "react";

const useFetch = (url, handle, depen) => {
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Fetch to failed");
      }

      const data = await response.json();

      handle(data);
    };
    fetchMovie().catch((error) => {
      console.log(error.message);
    });
  }, [depen]);
};

export default useFetch;
