'use client';

import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Container, Flex, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";

const TambahRekening = () => {
    return (
        <DashboardLayout
            bottomNavigation={false}
            px="20px"
            meta={{
                title: 'Beli Followers Tik Tok | Jasa Followers Tik Tok',
                description:
                    'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.',
            }}
            navbarHeader={{
                showBackButton: true,
                title: "Tambah Rekening"
            }}
        >
            <Box mb={"15px"} />
            <Container>
                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"}>
                    Bank
                </Text>
                <FormControl id='jenis-rekening' my={3}>
                    <Select
                        bg='#F2F2F2'
                        borderRadius="10px"
                        fontFamily='Poppins'
                        fontSize={"13px"}
                        fontWeight='medium'
                        color='#1D1D1D'
                        placeholder='Pilih Jenis Rekening'
                        onChange={(e) => { }}
                    >
                        <option value="bca">BCA</option>
                        <option value="mandiri">Mandiri</option>
                        <option value="jenius">Jenius</option>
                    </Select>
                </FormControl>
                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"}>
                    Nomor Rekening
                </Text>
                <FormControl id='nama-lengkap' my={3}>
                    <Input
                        borderRadius={"14px"}
                        placeholder=' '
                        type='text'
                        bg='#F2F2F2'
                        fontSize={"13px"}
                        fontFamily='Poppins'
                        fontWeight='medium'
                        color='#1D1D1D'
                        onChange={(e) => { }}
                    />
                </FormControl>
                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"}>
                    Nama Rekening
                </Text>
                <FormControl id='nama-lengkap' my={3}>
                    <Input
                        borderRadius={"14px"}
                        placeholder=' '
                        type='text'
                        bg='#F2F2F2'
                        fontSize={"13px"}
                        fontFamily='Poppins'
                        fontWeight='medium'
                        color='#1D1D1D'
                        onChange={(e) => { }}
                    />
                </FormControl>
                <div className="fixed z-20 bottom-0 left-0 w-full bg-white px-3 ">
                    <div className="container">
                        <Box
                            borderRadius="10px"
                            py={"15px"}
                            mb={"15px"}
                            color={"White"}
                            background="#00AA12"
                            display="flex"
                            alignItems="center"
                            textAlign={"center"}
                            cursor="pointer"
                            justifyContent="center"
                            _hover={{
                                bg: "gray.100",
                                fontcolor: "black"
                            }}
                        >
                            <Flex>
                                <Text fontFamily="Poppins" textAlign="center" w="100%" fontWeight="medium" fontSize="15px" color="white" mt={"1px"}>
                                    Simpan
                                </Text>
                            </Flex>
                        </Box>
                    </div>
                </div>

            </Container>
        </DashboardLayout>
    );
};

export default TambahRekening;
