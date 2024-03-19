import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { VideoFeed } from "../components/VideoFeed";
import { IJobItem } from "../types";

export const CountryFeed = () => {
  const location = useLocation();
  const [countryFeed, setCountryFeed] = useState<IJobItem[]>([]);
  const [loading, setLoading] = useState(true);

  const country = location.pathname.split("/")[2].toLocaleLowerCase();

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
      .then((data: IJobItem[]) => {
        setCountryFeed(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {countryFeed.map((country) => (
        <div key={country.title}>
          <h2>{country.title}</h2>
          <VideoFeed />
        </div>
      ))}
    </>
  );
};
