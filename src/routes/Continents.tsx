import { Link } from "react-router-dom";

import AfricaPng from "../assets/continents-quick/africa.png";
import AsiaPng from "../assets/continents-quick/asia.png";
import AustraliaPng from "../assets/continents-quick/australia.png";
import EuropePng from "../assets/continents-quick/europe.png";
import NorthAmericaPng from "../assets/continents-quick/north-america.png";
import SouthAmericaPng from "../assets/continents-quick/south-america.png";

interface IContinents {
  jobsCount: Record<string, number> | null;
}

export const Continents = ({ jobsCount }: IContinents) => {
  const continentsArr = [
    {
      continent: "North America",
      route: "/north-america",
      image: NorthAmericaPng,
    },
    {
      continent: "South America",
      route: "/south-america",
      image: SouthAmericaPng,
    },
    {
      continent: "Europe",
      route: "/europe",
      image: EuropePng,
    },

    {
      continent: "Africa",
      route: "/africa",
      image: AfricaPng,
    },
    {
      continent: "Asia",
      route: "/asia",
      image: AsiaPng,
    },
    {
      continent: "Australia",
      route: "/australia",
      image: AustraliaPng,
    },
  ];

  return (
    <>
      <h2>TinyGlob</h2>
      <br />
      <ul
        style={{
          listStyleType: "none",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          margin: "0 auto",
          maxWidth: "1000px",
          gap: "3rem",
          padding: "0",
        }}
      >
        {continentsArr.map((continentObj) => (
          <li key={continentObj.route}>
            <div style={{ marginBottom: "2rem", textAlign: "center" }}>
              {continentObj.continent}
            </div>
            <Link to={continentObj.route}>
              <div style={{ position: "relative" }}>
                <img
                  src={continentObj.image}
                  alt={continentObj.continent}
                  width={300}
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
                    {jobsCount[continentObj.route.split("/")[1]] || 0}
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
