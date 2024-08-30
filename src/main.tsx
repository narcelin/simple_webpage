import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Welcome from "./pages/Welcome";
import PageNotFound from "./pages/PageNotFound";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/ShowCreators",
    element: <ShowCreators />,
  },
  {
    path: "/ViewCreator",
    element: <ViewCreator />,
  },
  {
    path: "/EditCreator",
    element: <EditCreator />,
  },
  {
    path: "/AddCreator",
    element: <AddCreator />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
