import { Link } from "react-router-dom";

import AfricaPng from "../assets/africa.png";
import AsiaPng from "../assets/asia.png";
import AustraliaPng from "../assets/australia.png";
import EuropePng from "../assets/europe.png";
import NorthAmericaPng from "../assets/north-america.png";
import SouthAmericaPng from "../assets/south-america.png";

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
    { continent: "Europe", route: "/europe", image: EuropePng },

    { continent: "Africa", route: "/africa", image: AfricaPng },
    { continent: "Asia", route: "/asia", image: AsiaPng },
    { continent: "Australia", route: "/australia", image: AustraliaPng },
  ];

  return (
    <>
      <h2>CareerHub</h2>
      <br />
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: "3rem",
          padding: "0",
        }}
      >
        {continentsArr.map((continentObj) => (
          <li key={continentObj.route}>
            <div style={{marginBottom: '1rem'}}>{continentObj.continent}</div>
            <Link to={continentObj.route}>
              <div style={{ position: 'relative' }}>
                <img
                  src={continentObj.image}
                  alt={continentObj.continent}
                  width={180}
                />
                {jobsCount ?  (
                                  <span style={{
                                    position: 'absolute',
                                    backgroundColor: 'black',
                                    width: '25px',
                                    borderRadius: '50px',
                                    top: '35%',
                                    left: '30%',
                                    transform: 'translate(-35%, -30%)'
                                  }}>
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
