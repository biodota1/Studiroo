import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";
import About from "./components/About";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  { path: "/Studiroo/about", Component: About },
  { path: "/Studiroo/settings", Component: Settings },
  { path: "/Studiroo/schedule", Component: Schedule },
  { path: "/Studiroo/profile", Component: Profile },
  { path: "/Studiroo/", Component: Homepage },
  { path: "/Studiroo/", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return;
}
