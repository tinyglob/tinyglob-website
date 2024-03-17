import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Continent = () => {
  const location = useLocation();
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `https://whycareer-backend-production-d8e4.up.railway.app/jobs/continent/${location.pathname
          .split("/")[1]
          .toLocaleLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <ul>
        {countries &&
          countries.map((country) => {
            return (
              <li>
                {country.title} in {country.country}, {country.city}
              </li>
            );
          })}
      </ul>
    </>
  );
};
