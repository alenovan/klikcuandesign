'use client';

import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Flex, Text } from "@chakra-ui/react";


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
        <div className="bg-[#00AA12] relative overflow-hidden">
            <span className="bg-white w-56 h-56 rounded-full absolute -top-24 -right-32 inline-block opacity-40" />
            <div className="min-h-screen relative z-10 p-4 text-white flex flex-col justify-center items-center text-center">
                <AppIcon src={"sucesss"} color={"black"} />
                <p className="mb-2 text-xl font-medium">Saldo Berhasil Ditransfer</p>
                <p className="max-w-[300px]">
                    Lorem ipsum dolor sit amet consectetur. Vel quam.
                </p>
            </div>
            <span className="bg-white w-56 h-56 rounded-full absolute -bottom-24 -left-32 inline-block opacity-40" />

        </div>



    </DashboardLayout>
};

export default WdSuccess;
