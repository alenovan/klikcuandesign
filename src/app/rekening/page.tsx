'use client';

import DashboardLayout from "@/components/Layout/DashboardLayout";
import RekeningButtonAdd from "@/components/Rekening/RekeningButtonAdd";
import RekeningList from "@/components/Rekening/RekeningList";
import { Box, Container } from "@chakra-ui/react";


const Rekening = () => {

    return (
        <DashboardLayout
            bottomNavigation={false}
            px="20px"
            meta={{
                title: 'Beli Followers Tik Tok | Jasa Followers Tik Tok',
                description:
                    'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.',
            }}
            navbarHeader={{
                showBackButton: true,
                title: "Rekening"

            }}
        >
            <Box mb={"15px"} />
            <Container>
                <RekeningList />
                <RekeningButtonAdd />
            </Container>
        </DashboardLayout>
    );
};

export default Rekening;
