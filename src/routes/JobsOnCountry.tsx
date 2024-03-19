import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const JobsOnCountry = () => {
  const location = useLocation();
  const [countryFeed, setCountryFeed] = useState([]);

  const country = location.pathname.split("/")[2].toLocaleLowerCase();

  console.log("country", country);

  const fetcherJobsCount = async () => {
    try {
      const response = await fetch(
        `https://tinyglob-backend-production.up.railway.app/jobs/country/${country}`
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
    fetcherJobsCount()
      .then((data) => setCountryFeed(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      {countryFeed.map((country) => {
        return <h2>{country.title}</h2>;
      })}
    </>
  );
};
