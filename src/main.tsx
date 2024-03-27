import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home/Home.tsx";
import { ContinentPage } from "./pages/ContinentPage/ContinentPage.tsx";
import { CountryFeed } from "./pages/CountryFeed/CountryFeed.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Login from "./pages/Login/Login.tsx";

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
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
