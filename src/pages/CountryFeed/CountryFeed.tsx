import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './CountryFeed.css';
import { motion } from 'framer-motion';
import useFetchJobsForCountry from '../../hooks/useFetchJobsForCountry';
import { IJobItem } from '../../types';

export const CountryFeed = () => {
  const location = useLocation();
  const country = location.pathname.split('/')[2].toLocaleLowerCase();

  const { countryFeed, isLoading } = useFetchJobsForCountry(country);

  return (
    <>
      <Header />
      <div className="container">
        <div className="country-feed-loader">{isLoading && <p>...</p>}</div>
        {countryFeed.map((job: IJobItem) => {
          console.log(job);
          return (
            <motion.div
              key={job.title}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='job-post'>
                <div>
                  <div key={job.title}>
                    <h2>{job.title}</h2>
                  </div>
                  <video loop muted controls height={400} width={400}>
                    <source src="/public/costco.mp4" type="video/mp4" />
                  </video>
                </div>
                <div>
                  <p>{job.title} in {job.company}</p>
                  <p>{job.city}</p>
                  <p>{job.start_salary} - {job.end_salary} {job.currency}</p>
                  <p>{job.posted_date}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </>
  );
};

