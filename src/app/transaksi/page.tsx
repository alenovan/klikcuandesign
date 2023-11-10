"use client";

import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Center, Container, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useEffect, useState } from "react";
export default function Transaksi() {
    // const router = useRouter()
    const [activeTab, setActiveTab] = useState(0)
    // useEffect(() => {
    //     if (router.query.tab !== "mutasi") return
    //     setActiveTab(1)
    // }, [router])
    return (
        <DashboardLayout
            bottomNavigation={true}
            meta={{
                title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
                description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
            }}
            navbarHeader={{
                showBackButton: false,
            }}>
            <Box>
                <Flex h={"100px"} justifyContent="center" alignItems="center">
                    <Center>
                        <Text fontFamily="Poppins" fontWeight="semibold" fontSize={"18px"}
                        >
                            Histori Transaksi
                        </Text>
                    </Center>
                </Flex>
                <Tabs
                    isFitted
                    index={activeTab}
                    onChange={setActiveTab}
                >
                    <TabList>
                        <Tab fontFamily="Poppins" fontSize={"14px"} bg={activeTab === 0 ? "#00AA12" : "transparent"} color={activeTab === 0 ? "#00AA12" : "#808089"}>
                            Semua
                        </Tab>
                        <Tab fontFamily="Poppins" fontSize={"14px"} bg={activeTab === 1 ? "#00AA12" : "transparent"} color={activeTab === 1 ? "#00AA12" : "#808089"}>
                            Menunggu
                        </Tab>
                        <Tab fontFamily="Poppins" fontSize={"14px"} bg={activeTab === 2 ? "#00AA12" : "transparent"} color={activeTab === 2 ? "#00AA12" : "#808089"}>
                            Sukses
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel px={0}>
                        </TabPanel>
                        <TabPanel px={0}>
                        </TabPanel>
                        <TabPanel px={0}>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </DashboardLayout>
    );
}
