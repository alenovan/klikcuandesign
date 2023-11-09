import DashboardLayout from "@/components/Layout/DashboardLayout";
import HomePageHeader from "@/modules/Homepage/HomePageHeader";

export default function Home() {
  return (
    <DashboardLayout
      bottomNavigation={true}
      meta={{
        title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
        description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
      }}
      navbarHeader={{
        showBackButton: false
      }}>
      <HomePageHeader />
    </DashboardLayout>
  );
}
