import Layout from "@/components/layout";
import { Outlet } from "react-router";
import ScrollToTop from "@/components/shared/scroll-to-top";

export default function Root() {
  return (
    <>
      <Layout>
        <Outlet />
        <ScrollToTop />
      </Layout>
    </>
  );
}
