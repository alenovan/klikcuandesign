"use client";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import MisiList from "@/components/Misi/MisiList";
import MisiListSampingan from "@/components/Misi/MisiListSampingan";
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Container, Image } from '@chakra-ui/react';
import { useState } from "react";
export default function MisiDetail() {
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
                title: "Misi Follow Akun Instagram"
            }}>
            <Container>
                <Box>
                    <Center my={"15px"} >
                        <Image src={"https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FFrame%201000004511.png?alt=media&token=42ee568a-0284-45ed-a20d-0cc688ed0aef"} alt={"test"} />
                    </Center>
                    <Tabs
                        isFitted
                        index={activeTab}
                        onChange={setActiveTab}
                    >
                        <TabList >
                            <Tab fontFamily="Poppins" fontSize={"14px"} fontWeight={activeTab === 0 ? "semibold" : "regular"} bg={activeTab === 0 ? "transparent" : "transparent"} color={activeTab === 0 ? "#00AA12" : "#808089"}>
                                Misi Utama
                            </Tab>
                            <Tab fontFamily="Poppins" fontSize={"14px"} fontWeight={activeTab === 1 ? "semibold" : "regular"} bg={activeTab === 1 ? "transparent" : "transparent"} color={activeTab === 1 ? "#00AA12" : "#808089"}>
                                Misi Sampingan
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <MisiList />
                            </TabPanel>
                            <TabPanel>
                                <MisiListSampingan />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
        </DashboardLayout>
    );
}
