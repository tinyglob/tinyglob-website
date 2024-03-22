import { useEffect, useState } from 'react';
import { PRODUCTION_API_URL } from '../constants';
import { IJobItem } from '../types';

const useFetchJobsForCountry = (country: string) => {
  const [countryFeed, setCountryFeed] = useState<IJobItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobsCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${PRODUCTION_API_URL}/jobs/country/${country}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const json = await response.json();
        setCountryFeed(json);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCountryFeed([]);
        setIsLoading(false);
      }
    };

    fetchJobsCount();
  }, [country]);

  return { countryFeed, isLoading };
};

export default useFetchJobsForCountry;
