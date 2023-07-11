import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { Root } from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Contact, Favorite } from "./routes/Contact";


// FIXME : Even tho it works this way, it is not as easy to write, try to remake this beahvior using the jsx syntax
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "contacts/:contactId",
        element: <Favorite contact="shit"/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
