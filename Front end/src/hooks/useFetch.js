import { useState, useEffect } from "react";

export default function useFetch(endpoint) {
  const [info, setInfo] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`${endpoint}`);
      let data = await response.json();
      setInfo(data);
      setIsLoaded(true);
    }

    try {
      fetchData();
    } catch (error) {
      console.log(
        `se produjo el siguiente error al intentar leer la base de datos: ${error}`
      );
    }
  }, []);

  return { info, isLoaded };
}
