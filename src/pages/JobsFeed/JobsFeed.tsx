import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './JobsFeed.css';
import { motion } from 'framer-motion';
import useFetchJobsById from '../../hooks/useFetchJobsById';

export const JobsFeed = () => {
  const { pathname } = useLocation();
  const jobId = pathname.split('/')[2].toLocaleLowerCase();
  const { jobPosting, isLoading } = useFetchJobsById(jobId);

  return (
    <>
      <Header />
      <div className="container">
        <h1>TIKTOK</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {jobPosting && (
              <div>
                <motion.div
                  key={jobPosting.title}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='job-post'>
                    <div>
                      <div key={jobPosting.title}>
                        <h2>{jobPosting.title}</h2>
                      </div>
                      <video loop muted controls height={400} width={400}>
                        <source src="/costco.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div>
                      <p>{jobPosting.title} in {jobPosting.company}</p>
                      <p>{jobPosting.city}</p>
                      <p>{jobPosting.start_salary} - {jobPosting.end_salary} {jobPosting.currency}</p>
                      <p>{jobPosting.posted_date}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

