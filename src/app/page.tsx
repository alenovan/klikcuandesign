'use client';

import HomeNews from "@/components/Home/HomeNews";
import HomePlaformMissionGrid from "@/components/Home/HomePlaformMissionGrid";
import HomePageHeaderMenu from "@/components/Home/HomepageHeaderMenu";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import HomePageHeader from "@/modules/Homepage/HomePageHeader";
import { Box } from "@chakra-ui/react";


const YourComponent = () => {

  return (
    <DashboardLayout
      bottomNavigation={true}
      px="20px"
      contenHeader={<HomePageHeader />}
      meta={{
        title: 'Beli Followers Tik Tok | Jasa Followers Tik Tok',
        description:
          'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.',
      }}
      navbarHeader={{
        showBackButton: false,

      }}
    >
      <HomePageHeaderMenu />
      <HomePlaformMissionGrid />
      <HomeNews />
      <Box h={"200px"} />
    </DashboardLayout>
  );
};

export default YourComponent;
