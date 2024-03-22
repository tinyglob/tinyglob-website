import { useEffect, useState } from 'react';
import { PRODUCTION_API_URL } from '../constants';

const useFetchJobsCount = () => {
  const [totalCountOfJobs, setTotalCountOfJobs] = useState<Record<string, number> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobsCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${PRODUCTION_API_URL}/jobs`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const json = await response.json();
        setTotalCountOfJobs(json);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setTotalCountOfJobs(null);
        setIsLoading(false);
      }
    };

    fetchJobsCount();
  }, []);

  return {totalCountOfJobs, isLoading};
};

export default useFetchJobsCount;
