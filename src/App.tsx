import "./App.css";
import { useEffect, useState } from "react";
import { Continents } from "./routes/Continents";

function App() {
  const [jobsCount, setJobsCount] = useState(null);

  const fetcherJobsCount = async () => {
    try {
      const response = await fetch(
        "https://whycareer-backend-production-d8e4.up.railway.app/jobs"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetcherJobsCount()
      .then((data) => setJobsCount(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return jobsCount ? <Continents jobsCount={jobsCount} /> : <h2>Loading...</h2>;
}

export default App;
