import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { inter } from "@/plugins/fonts";
import { Container } from "@/styled-components/container";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Container className={`${inter.variable}`}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
