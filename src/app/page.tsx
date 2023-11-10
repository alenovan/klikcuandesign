'use client';

import HomePageHeaderMenu from "@/components/Home/HomepageHeaderMenu";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import PlaformMissionGrid from "@/components/Misi/PlaformMissionGrid";
import HomePageHeader from "@/modules/Homepage/HomePageHeader";


const YourComponent = () => {

  return (
    <DashboardLayout
      bottomNavigation={true}
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
      <PlaformMissionGrid />
    </DashboardLayout>
  );
};

export default YourComponent;
