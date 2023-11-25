'use client';

import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import TransaksiDetailStatus from "@/components/Transaksi/TransaksiDetailStatus";
import { Center, Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";

export default function PenarikanHistoryDetail() {



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
                title: "Rangkuman Pembayaran"
            }}>
            <Stack>
                <TransaksiDetailStatus />
                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"}>General Info</Text>


                <Flex justifyContent="space-between" mt={"10px"}>
                    <HStack gap={5}>
                        <Stack gap={1}>
                            <Text fontFamily="Poppins" w="150px" fontWeight={"medium"} color={"#6D6B6E"}>Kode Penarikan</Text>
                        </Stack>
                    </HStack>
                    <Center>
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>W56378</Text>
                    </Center>
                </Flex>
                <Flex justifyContent="space-between" >
                    <HStack gap={5}>
                        <Stack gap={1}>
                            <Text fontFamily="Poppins" w="150px" fontWeight={"medium"} color={"#6D6B6E"}>Transfer ke</Text>
                        </Stack>
                    </HStack>
                    <Center>
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>Bank BCA</Text>
                    </Center>
                </Flex>
                <Flex justifyContent="space-between" >
                    <HStack gap={5}>
                        <Stack gap={1}>
                            <Text fontFamily="Poppins" w="150px" fontWeight={"medium"} color={"#6D6B6E"}>Ditransfer tanggal</Text>
                        </Stack>
                    </HStack>
                    <Center>
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>20/10/2023</Text>
                    </Center>
                </Flex>
                <Divider mt={5} mb={5} />
                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"} mb={"10px"}>Bukti Pembayaran</Text>
                <div className="bg-[#F2F2F2] rounded-2xl py-[14px] px-4 border border-spacing-1 border-dashed border-[#919999] text-center text-[#6D6B6E] flex items-center gap-3">
                    <AppIcon src={"image-file"} color={"black"} mr={"10px"} />
                    <span className="flex-1 text-left text-sm">Bukti Pembayaran_1</span>
                    <span
                        className="cursor-pointer"
                        onClick={() => {
                        }}
                    >
                        <Text fontFamily="Poppins" fontWeight={"italic"} fontStyle={"italic"} color={"#00AA12"}>Lihat</Text>

                    </span>
                </div>
            </Stack>
        </DashboardLayout>
    );
}
