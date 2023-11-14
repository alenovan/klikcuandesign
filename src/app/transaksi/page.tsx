"use client";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Center, Flex, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { useState } from "react";
import AppIcon from "@/components/AppIcon";
import TransaksiList from "@/components/Transaksi/TransaksiList";
export default function Transaksi() {
    const [activeTab, setActiveTab] = useState(0)
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
                    <TabList >
                        <Tab fontFamily="Poppins" fontSize={"14px"} bg={activeTab === 0 ? "transparent" : "transparent"} color={activeTab === 0 ? "#00AA12" : "#808089"}>
                            Semua
                        </Tab>
                        <Tab fontFamily="Poppins" fontSize={"14px"} bg={activeTab === 1 ? "transparent" : "transparent"} color={activeTab === 1 ? "#00AA12" : "#808089"}>
                            Menunggu
                        </Tab>
                        <Tab fontFamily="Poppins" fontSize={"14px"} bg={activeTab === 2 ? "transparent" : "transparent"} color={activeTab === 2 ? "#00AA12" : "#808089"}>
                            Sukses
                        </Tab>
                    </TabList>
                    <HStack mt={5}>
                        <Box
                            ml={"10px"}
                            borderRadius="full"
                            border="1px"
                            px={4}
                            py={2}
                            borderColor="#CECECE"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            cursor="pointer"
                            _hover={{
                                bg: "gray.100",
                            }}
                        >
                            <Text fontFamily="Poppins" fontWeight="medium" fontSize="13px" color="#7B8CA7" mr={"5px"}>
                                Semua Misi
                            </Text>
                            <Flex alignItems="center">
                                <AppIcon src={"chevron-down"} color={"black"} />
                            </Flex>
                        </Box>
                        <Box
                            borderRadius="full"
                            border="1px"
                            px={4}
                            py={2}
                            borderColor="#CECECE"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            cursor="pointer"
                            _hover={{
                                bg: "gray.100",
                            }}
                        >
                            <Text fontFamily="Poppins" fontWeight="medium" fontSize="13px" color="#7B8CA7" mr={"5px"}>
                                Semua Bulan
                            </Text>
                            <Flex alignItems="center">
                                <AppIcon src={"chevron-down"} color={"black"} />
                            </Flex>
                        </Box>
                    </HStack>
                    <TabPanels>
                        <TabPanel>
                            <TransaksiList />
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
