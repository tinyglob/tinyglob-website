import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Home } from "./routes/Home.tsx";
import { ContinentPage } from "./routes/ContinentPage.tsx";
import { CountryFeed } from "./routes/CountryFeed.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:continent",
    element: <ContinentPage />,
  },
  {
    path: "/:continent/:country",
    element: <CountryFeed />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
