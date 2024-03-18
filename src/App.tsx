import "./App.css";
import { useEffect, useState } from "react";
import { Continents } from "./routes/Continents";

function App() {
  const [jobsCount, setJobsCount] = useState(null);

  const fetcherJobsCount = async () => {
    try {
      const response = await fetch(
        "https://tinyglob-backend-production.up.railway.app/jobs"
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

  return <Continents jobsCount={jobsCount} />;
}

export default App;
