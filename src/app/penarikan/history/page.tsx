'use client';

import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Center, Divider, Flex, HStack, Stack, Text, TabPanel, TabPanels } from "@chakra-ui/react";

export default function PenarikanHistory() {

    const data = [
        {
            icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fimage%2033.png?alt=media&token=b684c476-3c31-4d65-a414-dbcf461b3d0d",
            norek: "52718058493",
            nama: "Andi Sufjan",
        },
        {
            icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fimage%2033.png?alt=media&token=b684c476-3c31-4d65-a414-dbcf461b3d0d",
            norek: "75982372394",
            nama: "Anna S.",
        },

    ]

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
                title: "Riwayat Penarikan"
            }}>
            <Stack>
                <Box
                    backgroundColor="white"
                    borderRadius="18px"
                    boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                    px={5}
                    py="10px"
                >
                    <Box h={"20px"} />
                    <Box
                        mb={"20px"}
                        style={{
                            background: "linear-gradient(to right, #05C927, #05C927)",
                            borderRadius: "15px",
                            boxShadow: "0px 5px 10px rgba(56, 89, 147, 0.05)",
                            padding: "23px",
                        }}
                    >
                        <Flex justifyContent="space-between">
                            <HStack gap={5}>
                                <Stack gap={1}>
                                    <Text fontFamily="Poppins" fontWeight={"medium"} color={"#FFFFFF"} fontSize={"13px"}>
                                        Saldo Aktif
                                    </Text>
                                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#FFFFFF"} fontSize={"18px"}>
                                        Rp 120.000
                                    </Text>
                                </Stack>
                            </HStack>
                            <Center>
                                <AppIcon src={"penarikan/penarikan"} color={"black"} />

                            </Center>

                        </Flex>
                        <Box h={"15px"} />
                        <Divider />
                        <Box h={"10px"} />
                        <HStack gap={5}>
                            <HStack gap={1}>
                                <AppIcon src={"penarikan/minipenarikan"} color={"black"} mr={"10px"} />
                                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#FFFFFF"} fontSize={"12px"}>
                                    Minimal penarikan saldo Rp 50.000
                                </Text>
                            </HStack>
                        </HStack>
                    </Box>

                    <Flex justifyContent="space-between" >
                        <HStack gap={5}>
                            <AppIcon src={"penarikan/saldotarik"} color={"black"} />
                            <Stack gap={1}>
                                <Text fontFamily="Poppins" w="150px" fontWeight={"semibold"} color={"#001F25"}>Saldo yang Ditarik</Text>
                            </Stack>
                        </HStack>
                        <Center>
                            <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"}>Rp 100.000</Text>
                        </Center>

                    </Flex>
                    <Box h={"15px"} />
                    <Flex justifyContent="space-between" >
                        <HStack gap={5}>
                            <AppIcon src={"penarikan/pendapatan"} color={"black"} />
                            <Stack gap={1}>
                                <Text fontFamily="Poppins" w="150px" fontWeight={"semibold"} color={"#001F25"}>Total Pendapatan</Text>
                            </Stack>
                        </HStack>
                        <Center>
                            <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"}>Rp 1.000.000</Text>
                        </Center>

                    </Flex>
                    <Box h={"15px"} />
                    <Flex justifyContent="space-between" >
                        <HStack gap={5}>
                            <AppIcon src={"penarikan/pengeluaran"} color={"black"} />
                            <Stack >
                                <Text fontFamily="Poppins" w="150px" fontWeight={"semibold"} color={"#001F25"}>Total Uang yang Ditransfer</Text>
                            </Stack>
                        </HStack>
                        <Center>
                            <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"}>Rp 950.000</Text>
                        </Center>

                    </Flex>
                    <Box h={"10px"} />

                </Box>
                <Box h={"10px"} />
                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"} fontSize={"15px"}>
                    Riwayat Penarikan
                </Text>
                <HStack mt={2}>
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
            </Stack>
        </DashboardLayout>
    );
}
