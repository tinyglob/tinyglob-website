import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AfricaPng from "../assets/continents-quick/africa.png";
import AsiaPng from "../assets/continents-quick/asia.png";
import AustraliaPng from "../assets/continents-quick/australia.png";
import EuropePng from "../assets/continents-quick/europe.png";
import NorthAmericaPng from "../assets/continents-quick/north-america.png";
import SouthAmericaPng from "../assets/continents-quick/south-america.png";

const CONTINENTS = [
  {
    continent: "North America",
    route: "/north-america",
    image: NorthAmericaPng,
  },
  {
    continent: "Europe",
    route: "/europe",
    image: EuropePng,
  },
  {
    continent: "Asia",
    route: "/asia",
    image: AsiaPng,
  },
  {
    continent: "South America",
    route: "/south-america",
    image: SouthAmericaPng,
  },

  {
    continent: "Africa",
    route: "/africa",
    image: AfricaPng,
  },
  {
    continent: "Australia",
    route: "/australia",
    image: AustraliaPng,
  },
];

export const Home = () => {
  const [jobsCount, setJobsCount] = useState<Record<string, number> | null>(
    null
  );

  const fetcherJobsCount = async () => {
    try {
      const response = await fetch(
        "https://tinyglob-backend-production.up.railway.app/jobs"
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
      .then((data) => setJobsCount(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h2>TinyGlob</h2>
      <br />
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "800px",
          margin: "0 auto",
          justifyContent: "center",
          listStyle: "none",
          padding: "0",
          gap: "3rem",
        }}
      >
        {CONTINENTS.map((continentObj) => (
          <li key={continentObj.route}>
            <div style={{ marginBottom: "2rem", textAlign: "center" }}>
              {continentObj.continent}
            </div>
            <Link to={continentObj.route}>
              <div style={{ position: "relative" }}>
                <img
                  src={continentObj.image}
                  alt={continentObj.continent}
                  width={230}
                  style={{opacity: jobsCount ? 1 : 0.2 }}
                />
                {jobsCount ? (
                  <span
                    style={{
                      position: "absolute",
                      textAlign: "center",
                      backgroundColor: "#e0e0e0",
                      boxShadow:
                        "30px 30px 29px #a8a8a8 -30px -30px 29px #ffffff",
                      width: "25px",
                      borderRadius: "50px",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-35%, -30%)",
                    }}
                  >
                    {jobsCount[continentObj.route.split("/")[1]]}
                  </span>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
