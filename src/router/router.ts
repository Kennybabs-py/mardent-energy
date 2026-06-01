import { createBrowserRouter } from "react-router";
import Home from "@/pages/home";
import ContactUs from "@/pages/contact-us";
import Root from "./root";

const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/contact-us", Component: ContactUs },
    ],
  },
]);

export default router;
