'use client';

import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import VerifikasiButton from "@/components/Verifikasi/VerifikasiButton";
import { Stack, Text, Container, Flex, HStack, Box, FormControl, Input, Center } from "@chakra-ui/react";
import Link from "next/link";
export default function Otp() {

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
                title: "Kode OTP terkirim"
            }}>

            <Container>
                <Text fontFamily="Poppins" fontWeight="medium" color="#4C4C4C" fontSize="15px" mb="10px" mt="30px">
                    Masukkan kode OTP yang kami kirim melalui SMS ke nomor Whatsapp terdaftar
                    <Text as="span" fontWeight="bold"> +62 352373360 </Text>
                </Text>


                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#4C4C4C"} mt={"60px"} mb="10px">
                    Masukan Kode OTP
                </Text>
                <HStack>
                    <Input
                        borderRadius={"10px"}
                        placeholder=' '
                        type='text'
                        _focus={{
                            borderColor: "#00AA12"
                        }}
                        bg='#FFFFFF'
                        textAlign={"center"}
                        maxLength={1}
                        w={"50px"}
                        h={"50px"}
                        fontSize={"20px"}
                        fontFamily='Poppins'
                        fontWeight='medium'
                        color='#1D1D1D'
                        onChange={(e) => { }}
                    />
                    <Input
                        borderRadius={"10px"}
                        placeholder=' '
                        type='text'
                        _focus={{
                            borderColor: "#00AA12"
                        }}
                        bg='#FFFFFF'
                        textAlign={"center"}
                        maxLength={1}
                        w={"50px"}
                        h={"50px"}
                        fontSize={"20px"}
                        fontFamily='Poppins'
                        fontWeight='medium'
                        color='#1D1D1D'
                        onChange={(e) => { }}
                    />
                    <Input
                        borderRadius={"10px"}
                        placeholder=' '
                        type='text'
                        _focus={{
                            borderColor: "#00AA12"
                        }}
                        bg='#FFFFFF'
                        textAlign={"center"}
                        maxLength={1}
                        w={"50px"}
                        h={"50px"}
                        fontSize={"20px"}
                        fontFamily='Poppins'
                        fontWeight='medium'
                        color='#1D1D1D'
                        onChange={(e) => { }}
                    />
                    <Input
                        borderRadius={"10px"}
                        placeholder=' '
                        type='text'
                        _focus={{
                            borderColor: "#00AA12"
                        }}
                        bg='#FFFFFF'
                        textAlign={"center"}
                        maxLength={1}
                        w={"50px"}
                        h={"50px"}
                        fontSize={"20px"}
                        fontFamily='Poppins'
                        fontWeight='medium'
                        color='#1D1D1D'
                        onChange={(e) => { }}
                    />

                </HStack>
                <HStack justifyContent="space-between">
                    <Text fontFamily="Poppins" fontWeight="light" color="#333333" fontSize="15px" mb="10px" mt="30px">
                        Belum dapat kode?
                        <Text as="span" fontWeight="medium" textColor={"#00AA12"}> Kirim ulang </Text>
                    </Text>
                    <HStack >
                        <Center mt="25px">
                            <AppIcon src={"otpclock"} color={"black"} cursor="pointer" mr={"2px"} />
                            <Text fontFamily="Poppins" fontWeight={"medium"} color={"#333333"} fontSize={"13px"}>
                                45s
                            </Text>
                        </Center>
                    </HStack>
                </HStack>
                <Link passHref href={"/profile/verifikasi/success"}>
                    <VerifikasiButton text="Selanjutnya" />
                </Link>
            </Container>
        </DashboardLayout>
    );
}
