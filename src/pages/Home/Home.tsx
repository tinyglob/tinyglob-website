import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import Header from "../../components/Header/Header";
import { CONTINENTS } from "../../constants";
import './Home.css';
import useFetchJobsCount from "../../hooks/useFetchJobsCount";

export const Home = () => {
  const { totalCountOfJobs, isLoading } = useFetchJobsCount();

  return (
    <>
      <Header />
      <div className="home-wrapper">
        {isLoading ? <p>. . .</p> : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="home-list-of-continents container">
              {CONTINENTS.map((continent) => {
                // TODO: Double check how we can remove the '!' here
                const jobCount = totalCountOfJobs![continent.route.split("/")[1]] || 0;
                return (
                  <li className={jobCount !== 0 ? "home-continent" : '"'} key={continent.route}>
                    <p className="home-continent-title">
                      {continent.name}
                    </p>
                    {jobCount === 0 ? (
                      <img
                        style={{ opacity: jobCount === 0 ? 0.2 : 1 }}
                        src={continent.image}
                        alt={continent.name}
                        width={150}
                      />
                    ) : (
                      <Link to={continent.route}>
                        <div className="home-continent-wrapper">
                          <img
                            src={continent.image}
                            alt={continent.name}
                            width={150}
                          />
                          <span className="home-continent-job-count">
                            {jobCount === 0 ? null : jobCount}
                          </span>
                        </div>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};
