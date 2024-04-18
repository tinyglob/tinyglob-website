import { useState } from "react";
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
  const [currentJobIndex, setCurrentJobIndex] = useState(0); // need to create the logic to scroll card-info/list of jobs inside the continent-job

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
                      <Link
                        to={`/job/${jobs[currentJobIndex].job_id}`}
                        key={jobs[currentJobIndex].job_id}
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
                            {formatCountryName(jobs[currentJobIndex].country)}
                          </h3>
                          <div style={{ display: "flex" }}>
                            <p>{jobs[currentJobIndex].title} at</p>
                            <p style={{ color: "#187498", fontWeight: 600 }}>
                              &nbsp;{jobs[currentJobIndex].city}
                            </p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <img src={Logo} alt="coin" width={22} />
                            <p>
                              {jobs[currentJobIndex].start_salary} -{" "}
                              {jobs[currentJobIndex].end_salary}
                            </p>
                          </div>
                        </div>
                      </Link>
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
