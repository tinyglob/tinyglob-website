import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { JobsOnContinents } from "./routes/JobsOnContinents.tsx";
import { JobsOnContinent } from "./routes/JobsOnContinent.tsx";
import { JobsOnCountry } from "./routes/JobsOnCountry.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JobsOnContinents />,
  },
  {
    path: "/:continent",
    element: <JobsOnContinent />,
  },
  {
    path: "/:continent/:country",
    element: <JobsOnCountry />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
