import React from "react";
import BottomNavbar from "../Navbar/BottomNavbar";
import NavbarHeader, { NavbarHeaderProps } from "./NavbarHeader";
import { Box, ChakraProps, Container } from "@chakra-ui/react";
import Head from "next/head";
interface IDashboardLayoutProps {
  children: React.ReactNode;
  navbarHeader?: NavbarHeaderProps;
  bottomNavigation?: boolean;
  meta?: {
    title?: string,
    description?: string
  },
  backgroundColor?: "white" | "gray.soft" | "gray.700"
  contentGap?: boolean
  contentWrapper?: boolean
}

const DashboardLayout = (props: IDashboardLayoutProps) => {
  const { children,
    navbarHeader,
    meta,
    bottomNavigation,
    backgroundColor = "gray.soft",
    contentGap = true,
    contentWrapper, } = props;
  const contentWrapperStyle: ChakraProps = contentWrapper
    ? {
      marginTop: "-90px",
      position: "relative",
      zIndex: 9,
      backgroundColor,
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      paddingTop: "20px",
      minHeight: "300px",
    }
    : {};
  return (
    <Box >
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description}></meta>
      </Head>
      <NavbarHeader {...navbarHeader} />
      <Container >
        <Box {...contentWrapperStyle}>{children}</Box>
      </Container>
      {bottomNavigation && <BottomNavbar />}
    </Box>
  );
};

export default DashboardLayout;
