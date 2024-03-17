import { Link } from "react-router-dom";

import AfricaPng from "../assets/africa.png";
import AsiaPng from "../assets/asia.png";
import AustraliaPng from "../assets/australia.png";
import EuropePng from "../assets/europe.png";
import NorthAmericaPng from "../assets/north-america.png";
import SouthAmericaPng from "../assets/south-america.png";

interface IContinents {
  jobsCount: Record<string, number>;
}

export const Continents = ({ jobsCount }: IContinents) => {
  const continentsArr = [
    { continent: "Europe", route: "/europe", image: EuropePng },
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
    { continent: "Africa", route: "/africa", image: AfricaPng },
    { continent: "Australia", route: "/australia", image: AustraliaPng },
    { continent: "Asia", route: "/asia", image: AsiaPng },
  ];

  return (
    <>
      <h2>Where you want to work?</h2>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "20px",
          padding: "0",
        }}
      >
        {continentsArr.map((continentObj) => (
          <li key={continentObj.route}>
            <Link to={continentObj.route}>
              {jobsCount[continentObj.route.split("/")[1]] || 0} -{" "}
              {continentObj.continent}
            </Link>
            <img
              src={continentObj.image}
              alt={continentObj.continent}
              width={200}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
