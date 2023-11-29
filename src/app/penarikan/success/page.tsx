'use client';

import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";


const WdSuccess = () => {
    return <DashboardLayout
        bottomNavigation={false}
        meta={{
            title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
            description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
        }}
        navbarHeader={{
            showBackButton: false,
            title: "Transfer Saldo"
        }}>
        <div className="bg-[#00AA12] relative overflow-hidden min-h-screen flex flex-col">
            <span className="bg-white w-56 h-56 rounded-full absolute -top-24 -right-32 inline-block opacity-40" />
            <div className="relative z-10 p-4 text-white flex flex-col justify-center items-center text-center flex-grow">
                <AppIcon src={"success"} color={"black"} />
                <p className="mb-2 text-xl font-medium">Saldo Berhasil Ditransfer</p>
                <p className="max-w-[300px]">
                    Lorem ipsum dolor sit amet consectetur. Vel quam.
                </p>
            </div>
            <div className=" text-black w-full px-4 py-4   mb-8 rounded-5">
                <Link passHref href={"/penarikan/history"}>
                    <Box background={"white"} borderRadius={"12px"} padding={"17px"} cursor={"pointer"}>
                        <Center>
                            <Text color={"#1D1D1D"} fontWeight={"semibold"} fontFamily={"Poppins"}>Lihat Rangkuman Pembayaran</Text></Center>
                    </Box>
                </Link>
            </div>

            <span className="bg-white w-56 h-56 rounded-full absolute -bottom-24 -left-32 inline-block opacity-40" />
        </div>





    </DashboardLayout>
};

export default WdSuccess;
