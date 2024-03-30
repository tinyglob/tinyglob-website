import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

import { motion } from "framer-motion";
import './Continent.css';
import useFetchJobsForContinent from "../../hooks/useFetchJobsForContinent";

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
          {isLoading ? <p>. . .</p> : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {jobsOnContinent === null ? <p>Failed to fetch data</p> : (
                <div className="continent-jobs-list">
                  {jobsOnContinent.map((job) => {
                    return (
                      <div key={job.job_id} className="continent-job">
                        <h2>{job.title}</h2>
                        <p>{job.company}</p>
                        <p>{job.country}, {job.city}</p>
                        <Link to={`/job/${job.job_id}`}>View job</Link>
                      </div>
                    )
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
