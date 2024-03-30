import { useEffect, useState } from 'react';
import { PRODUCTION_API_URL } from '../constants';
import { IJobItem } from "../types";

const useFetchJobsForContinent = (continent: string) => {
  const [jobsOnContinent, setJobsOnContinent] = useState<IJobItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobsCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${PRODUCTION_API_URL}/jobs/continent/${continent}`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const json = await response.json();
        setJobsOnContinent(json);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setJobsOnContinent(null);
        setIsLoading(false);
      }
    };

    fetchJobsCount();
  }, [continent]);

  return {jobsOnContinent, isLoading};
};

export default useFetchJobsForContinent;
