import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";

import AfricaPng from "../assets/continents-quick/africa.png";
import AsiaPng from "../assets/continents-quick/asia.png";
import AustraliaPng from "../assets/continents-quick/australia.png";
import EuropePng from "../assets/continents-quick/europe.png";
import NorthAmericaPng from "../assets/continents-quick/north-america.png";
import SouthAmericaPng from "../assets/continents-quick/south-america.png";

import './Home.css';
import Header from "../components/Header";

const CONTINENTS = [
  {
    name: "North America",
    route: "/north-america",
    image: NorthAmericaPng,
  },
  {
    name: "Europe",
    route: "/europe",
    image: EuropePng,
  },
  {
    name: "Asia",
    route: "/asia",
    image: AsiaPng,
  },
  {
    name: "South America",
    route: "/south-america",
    image: SouthAmericaPng,
  },
  {
    name: "Africa",
    route: "/africa",
    image: AfricaPng,
  },
  {
    name: "Australia",
    route: "/australia",
    image: AustraliaPng,
  },
];

export const Home = () => {
  const [totalCountOfJobs, setTotalCountOfJobs] = useState<Record<string, number> | null>(null);

  useEffect(() => {
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

    fetcherJobsCount()
      .then((data) => setTotalCountOfJobs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />
      <ul className="home-list-of-continents">
        {CONTINENTS.map((continent) => {
          const jobCount = totalCountOfJobs ? totalCountOfJobs[continent.route.split("/")[1]] || 0 : 0;
          const opacity = jobCount === 0 ? 0.2 : 1;
          return (
            <li key={continent.route}>
              <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                {continent.name}
              </div>
              {jobCount === 0 ? (
                <img
                  src={continent.image}
                  alt={continent.name}
                  width={230}
                  style={{ transition: 'opacity 2s', opacity }}
                />
              ) : (
                <Link to={continent.route} style={{ textDecoration: "none" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={continent.image}
                      alt={continent.name}
                      width={230}
                    />
                    {totalCountOfJobs ? (
                      <span
                        style={{
                          position: "absolute",
                          textAlign: "center",
                          backgroundColor: "#e0e0e0",
                          boxShadow:
                            "30px 30px 29px #a8a8a8 -30px -30px 29px #ffffff",
                          width: "25px",
                          borderRadius: "50px",
                          top: "35%",
                          left: "30%",
                          transform: "translate(-35%, -30%)",
                        }}
                      >
                        {jobCount === 0 ? null : jobCount}
                      </span>
                    ) : null}
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
