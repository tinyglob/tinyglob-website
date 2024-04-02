import { useEffect, useState } from 'react';
import { PRODUCTION_API_URL } from '../constants';
import { IJobItem } from '../types';

const useFetchJobsById = (id: string) => {
  const [jobPosting, setJobPosting] = useState<IJobItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobsCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${PRODUCTION_API_URL}/jobs/id/${id}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const json = await response.json();
        setJobPosting(json);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setJobPosting(null);
        setIsLoading(false);
      }
    };

    fetchJobsCount();
  }, [id]);

  return { jobPosting, isLoading };
};

export default useFetchJobsById;
