import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

import { motion } from "framer-motion";
import './Continent.css';
import { getContinentImageByText } from "../../helpers/getContinentImageByText";
import useFetchJobsForContinent from "../../hooks/useFetchJobsForContinent";

export const Continent = () => {
  const location = useLocation();
  const continent = location.pathname.split("/")[1];
  const { jobsOnContinent, isLoading } = useFetchJobsForContinent(continent);

  return (
    <>
      <Header />
      <div className="container">
        <h1>{continent.toUpperCase()}</h1>
        <div className="continent-flex">
          {isLoading ? <p>. . .</p> : (
            <div className="continent-wrapper">
              <div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={getContinentImageByText(continent)}
                    alt={continent}
                    width={500}
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {jobsOnContinent === null ? <p>Failed to fetch data</p> : (
                    <ul className="continent-jobs-list">
                      {Object.keys(jobsOnContinent).map((country, index) => {
                        return (
                          <li key={index}>
                            <Link to={`/${continent}/${country}`}>
                              {country.toUpperCase()} — {jobsOnContinent[country]}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
