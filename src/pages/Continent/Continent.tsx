import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import CardImage from "../../assets/continents-countries/test-image.avif";

import { motion } from "framer-motion";
import "./Continent.css";
import useFetchJobsForContinent from "../../hooks/useFetchJobsForContinent";
import { formatCountryName } from "../../helpers/helpers";

export const Continent = () => {
  const location = useLocation();
  const continent = location.pathname.split("/")[1];
  const { jobsOnContinent, isLoading } = useFetchJobsForContinent(continent);

  console.log(jobsOnContinent);

  return (
    <>
      <Header />
      <div className="container">
        <h1>{continent.toUpperCase()}</h1>
        <div className="continent-flex">
          {isLoading ? (
            <p>. . .</p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {jobsOnContinent === null ? (
                <p>Failed to fetch data</p>
              ) : (
                <div className="continent-jobs-list">
                  {jobsOnContinent.map((job) => {
                    console.log("job", job);
                    return (
                      <Link
                        to={`/job/${job.job_id}`}
                        key={job.job_id}
                        className="continent-job"
                      >
                        <img src={CardImage} alt="image" width={350} />
                        <div className="card-info">
                          <h3>{job.title}</h3>
                          <p style={{ color: "#333" }}>{job.company}</p>
                          <p>
                            {formatCountryName(job.country)}, {job.city}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
