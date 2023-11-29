'use client';

import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import VerifikasiButton from "@/components/Verifikasi/VerifikasiButton";
import { Stack, Text, Container, Flex, HStack, Box, FormControl, Input } from "@chakra-ui/react";
import Link from "next/link";
export default function Verifikasi() {

    return (
        <DashboardLayout
            bottomNavigation={false}
            px="15px"
            meta={{
                title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
                description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
            }}
            navbarHeader={{
                showBackButton: false,
                title: "Edit Profil"
            }}>

            <Container>
                <Flex justifyContent="space-between" mb={"20px"}>
                    <Stack gap={0} mt={"30px"}>
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"} fontSize={"22px"}>
                            Verifikasi nomor Whatsapp anda dengan kode OTP
                        </Text>
                    </Stack>
                    <AppIcon src={"cross"} color={"black"} cursor="pointer" mt="1px" />
                </Flex>
                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#4C4C4C"} fontSize={"15px"} mb={"10px"}>
                    Kami akan mengirimkan kode ke nomor Whatsapp anda
                </Text>

                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#4C4C4C"} mt={"40px"} mb="10px">
                    Nomor Whatsapp anda
                </Text>
                <HStack>
                    <Box
                        backgroundColor="#FFFFFF"
                        borderRadius="10px"
                        border="1px"
                        borderColor={"#E7EAEB"}
                        p={"8px"}
                        mr={"10px"}
                    >
                        <HStack mr={"15px"}>
                            <AppIcon src={"indo"} color={"black"} cursor="pointer" mt="1px" />
                            <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} fontSize={"15px"}>
                                +62
                            </Text>
                        </HStack>
                    </Box>
                    <FormControl id='alamat' >
                        <Input
                            borderRadius={"10px"}
                            placeholder=' '
                            type='text'
                            borderColor={"#E7EAEB"}
                            bg='#FFFFFF'
                            fontSize={"13px"}
                            fontFamily='Poppins'
                            fontWeight='medium'
                            color='#1D1D1D'
                            onChange={(e) => { }}
                        />
                    </FormControl>

                </HStack>
                <Link passHref href={"/profile/verifikasi/otp"}>
                    <VerifikasiButton text="Kirim Kode OTP" />
                </Link>
            </Container>
        </DashboardLayout>
    );
}
