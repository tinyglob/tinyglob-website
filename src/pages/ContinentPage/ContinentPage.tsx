import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

import { motion } from "framer-motion";
import './ContinentPage.css';
import { getContinentImageByText } from "../../helpers/getContinentImageByText";
import useFetchJobsForContinent from "../../hooks/useFetchJobsForContinent";

export const ContinentPage = () => {
  const location = useLocation();
  const continent = location.pathname.split("/")[1];
  const { jobsOnContinent, isLoading } = useFetchJobsForContinent(continent);

  return (
    <>
      <Header />
      <div className="container continent-wrapper">
        <h1>{continent}</h1>
        {isLoading ? <p>...</p> : (
          <div className="continent-flex">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={getContinentImageByText(continent)}
                alt={continent}
                width={400}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {jobsOnContinent === null ? <p>Failed to fetch data</p> : (
                <ul>
                  {Object.keys(jobsOnContinent).map((country, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/${continent}/${country}`}>
                          {jobsOnContinent[country]} jobs in {country}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          </div>
        )}

      </div>
    </>
  );
};
