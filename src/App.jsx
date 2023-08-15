import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";
import About from "./components/About";

const router = createBrowserRouter([
  { path: "/about", Component: About },
  { path: "/settings", Component: Settings },
  { path: "/schedule", Component: Schedule },
  { path: "/", Component: Homepage },
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return;
}
