import DashboardLayout from "@/components/Layout/DashboardLayout";
import PlatformMission from "@/components/Misi/PlatformMission";
import { Box, Container } from "@chakra-ui/react";
export default function Misi() {





  return (
    <DashboardLayout
      bottomNavigation={true}
      px="15px"
      meta={{
        title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
        description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
      }}
      navbarHeader={{
        showBackButton: true,
        title: "Misi"
      }}>
      <Container>

        <PlatformMission title={"Instagram"} icon={"https://vrlzr-be.promosindo.web.id/uploads/platforms/1688800923.png"} mission={"6"} link={`misi/Instagram`} banner={"1"} platfrom={""} />

      </Container>
    </DashboardLayout>
  );
}
