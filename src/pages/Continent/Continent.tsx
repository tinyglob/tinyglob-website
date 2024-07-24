import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import CardImage from "../../assets/continents-countries/test-image.avif";
import Logo from "../../assets/icons/logo.jpg";
import { motion } from "framer-motion";
import "./Continent.css";
import useFetchJobsForContinent from "../../hooks/useFetchJobsForContinent";
import { formatCountryName } from "../../helpers/helpers";
import { IJobItem } from "../../types";

export const Continent = () => {
  const location = useLocation();
  const continent = location.pathname.split("/")[1];
  const { jobsOnContinent, isLoading } = useFetchJobsForContinent(continent);
  const groupedJobs: { [key: string]: IJobItem[] } = {};

  if (jobsOnContinent) {
    for (const job of jobsOnContinent) {
      if (!groupedJobs[job.country]) {
        groupedJobs[job.country] = [];
      }
      groupedJobs[job.country].push(job);
    }
  }

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
                  {Object.entries(groupedJobs).map(([country, jobs]) => (
                    <div key={country} className="country-jobs">
                      <h2>{formatCountryName(country)}</h2>
                      {jobs.map((job) => (
                        <Link
                          to={`/job/${job.job_id}`}
                          key={job.job_id}
                          className="continent-job"
                        >
                          <img
                            src={CardImage}
                            alt="image"
                            width={350}
                            style={{ borderRadius: "15px" }}
                          />
                          <div className="card-info">
                            <h3 style={{ textAlign: "center" }}>
                              {job.title}
                            </h3>
                            <div style={{ display: "flex" }}>
                              <p>{job.title} at</p>
                              <p style={{ color: "#187498", fontWeight: 600 }}>
                                &nbsp;{job.city}
                              </p>
                            </div>
                            <div style={{ display: "flex" }}>
                              <img src={Logo} alt="coin" width={22} />
                              <p>
                                {job.start_salary} - {job.end_salary}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
