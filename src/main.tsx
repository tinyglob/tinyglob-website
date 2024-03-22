import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home/Home.tsx";
import { ContinentPage } from "./pages/ContinentPage/ContinentPage.tsx";
import { CountryFeed } from "./pages/CountryFeed/CountryFeed.tsx";

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
  {
    path: "/login",
    element: <p>Login</p>,
  },
  {
    path: "/signup",
    element: <p>Login</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
