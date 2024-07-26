import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import ContactUs from "@/pages/contact-us";
import ScrollToTop from "@/components/shared/scroll-to-top";

export default function Root() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
      <ScrollToTop />
    </>
  );
}
