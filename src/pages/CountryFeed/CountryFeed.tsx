import { useLocation } from "react-router-dom";
import { VideoFeed } from "../../components/Video/VideoFeed";
import Header from "../../components/Header/Header";
import './CountryFeed.css';
import { motion } from "framer-motion";
import useFetchJobsForCountry from "../../hooks/useFetchJobsForCountry";

export const CountryFeed = () => {
  const location = useLocation();
  const country = location.pathname.split("/")[2].toLocaleLowerCase();

  const { countryFeed, isLoading } = useFetchJobsForCountry(country);


  return (
    <>
      <Header />
      <div className="container">
        <div className="country-feed-loader">
          {isLoading && <p>...</p>}
        </div>
        {countryFeed.map((country) => (
          <motion.div
            key={country.title}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div key={country.title}>
              <h2>{country.title}</h2>
              <VideoFeed />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
