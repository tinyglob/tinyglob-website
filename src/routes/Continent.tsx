import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import AfricaPng from "../assets/continents-quick/africa.png";
import AsiaPng from "../assets/continents-quick/asia.png";
import AustraliaPng from "../assets/continents-quick/australia.png";
import EuropePng from "../assets/continents-quick/europe.png";
import NorthAmericaPng from "../assets/continents-quick/north-america.png";
import SouthAmericaPng from "../assets/continents-quick/south-america.png";

export const Continent = () => {
  const location = useLocation();
  const [countries, setCountries] = useState([]);

  const continent = location.pathname.split("/")[1].toLocaleLowerCase()

  const getCurrentContinent = () => {
    switch (continent) {
      case 'africa':
        return AfricaPng;
      case 'asia':
        return AsiaPng;
      case 'australia':
        return AustraliaPng;
      case 'europe':
        return EuropePng;
      case 'north-america':
        return NorthAmericaPng;
      case 'south-america':
        return SouthAmericaPng;
      default:
        return null;
    }
  }

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
        console.log(data);
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={getCurrentContinent()}
        style={{ position: "fixed", top: "0", left: "0", zIndex: "-1", width: "30%" }}
        alt={continent}
      />
      <div>
        <h1>{continent}</h1>
        <ul style={{listStyle: 'none'}}>
          {countries &&
            countries.map((country) => (
              <li key={country.title}>
                {country.title} in {country.country}, {country.city}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
