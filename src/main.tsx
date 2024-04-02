import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home/Home.tsx";
import { Continent } from "./pages/Continent/Continent.tsx";
import { JobsFeed } from "./pages/JobsFeed/JobsFeed.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import LogIn from "./pages/LogIn/LogIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:continent",
    element: <Continent />,
  },
  {
    path: "/:continent/:country",
    element: <JobsFeed />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
