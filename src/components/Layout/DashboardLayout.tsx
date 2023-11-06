import React from "react";
import BottomNavbar from "../Navbar/BottomNavbar";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: IDashboardLayoutProps) => {
  const { children } = props;
  return (
    <main className="min-h-screen">
      <div className="container">{children}</div>
      <BottomNavbar />
    </main>
  );
};

export default DashboardLayout;
