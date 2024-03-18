import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { VideoFeed } from "../components/VideoFeed";

// TODO: Do we want to display an image of selected continent?
// import AfricaPng from "../assets/africa.png";
// import AsiaPng from "../assets/asia.png";
// import AustraliaPng from "../assets/australia.png";
// import EuropePng from "../assets/europe.png";
// import NorthAmericaPng from "../assets/north-america.png";
// import SouthAmericaPng from "../assets/south-america.png";

export const Continent = () => {
  const location = useLocation();
  const [countries, setCountries] = useState([]);

  const continent = location.pathname.split("/")[1].toLocaleLowerCase();

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
    <div>
      <h1 style={{ margin: 0 }}>{continent}</h1>
      <ul>
        {countries &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          countries.map((country: any) => {
            return (
              <li>
                {country.title} in {country.country}, {country.city}
                <VideoFeed />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
