import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import AfricaPng from "../assets/continents-quick/africa.png";
import AsiaPng from "../assets/continents-quick/asia.png";
import AustraliaPng from "../assets/continents-quick/australia.png";
import EuropePng from "../assets/continents-quick/europe.png";
import NorthAmericaPng from "../assets/continents-quick/north-america.png";
import SouthAmericaPng from "../assets/continents-quick/south-america.png";

interface ICountryData {
  [key: string]: number;
}

export const JobsOnContinent = () => {
  const location = useLocation();
  const [countries, setCountries] = useState<ICountryData>({});

  const continent = location.pathname.split("/")[1].toLocaleLowerCase();

  const getCurrentContinent = () => {
    switch (continent) {
      case "africa":
        return AfricaPng;
      case "asia":
        return AsiaPng;
      case "australia":
        return AustraliaPng;
      case "europe":
        return EuropePng;
      case "north-america":
        return NorthAmericaPng;
      case "south-america":
        return SouthAmericaPng;
      default:
        return "";
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `https://tinyglob-backend-production.up.railway.app/jobs/continent/${continent}`
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
        setCountries(data);
        console.log("data", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={getCurrentContinent()}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
          width: "40%",
          opacity: "0.3",
        }}
        alt={continent}
      />
      <div>
        <h1>{continent}</h1>
        <ul style={{ listStyle: "none" }}>
          {Object.keys(countries).map((country, index) => {
            return (
              <li key={index}>
                <Link to={`/${continent}/${country}`}>
                  {country}: {countries[country]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
