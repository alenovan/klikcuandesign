"use client";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import MisiList from "@/components/Misi/MisiList";
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Container, Image } from '@chakra-ui/react';
import { useState } from "react";
export default function MisiSubDetail() {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <DashboardLayout
            bottomNavigation={false}
            px="15px"
            meta={{
                title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
                description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
            }}
            navbarHeader={{
                showBackButton: true,
                title: "Detail Misi"
            }}>
            <Container>
                <Box>

                </Box>
            </Container>
        </DashboardLayout>
    );
}
