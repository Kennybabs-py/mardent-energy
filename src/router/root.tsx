import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Layout from "@/components/layout";

export default function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}
