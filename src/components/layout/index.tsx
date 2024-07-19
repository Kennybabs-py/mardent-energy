import { ReactNode, Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

type Props = { children: ReactNode };
export default function Layout(props: Props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
