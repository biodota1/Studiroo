import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";
import About from "./components/About";
import GettingStarted from "./components/GettingStarted";
import SetupUser from "./components/SetupUser";

const router = createBrowserRouter([
  { path: "/Studiroo/about", Component: About },
  { path: "/Studiroo/settings", Component: Settings },
  { path: "/Studiroo/schedule", Component: Schedule },
  { path: "/Studiroo/setup-user", Component: SetupUser },
  { path: "/Studiroo/", Component: GettingStarted },
  { path: "/Studiroo/", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return;
}
