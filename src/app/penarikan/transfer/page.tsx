'use client';

import DashboardLayout from "@/components/Layout/DashboardLayout";
import { useState } from "react";
import { Input, InputGroup, InputLeftElement, HStack, Text, Stack, Box, Flex, Image, Center, Divider } from '@chakra-ui/react';


export default function TransferWd() {
    const [number, setNumber] = useState('');
    const handleNumberChange = (event: any) => {
        // Remove non-numeric characters
        const sanitizedValue = event.target.value.replace(/[^0-9]/g, '');

        // Format the number with commas
        const formattedValue = Number(sanitizedValue).toLocaleString();

        // Update the state with the formatted number
        setNumber(formattedValue);
    };


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
                title: "Transfer Saldo"
            }}>
            <Stack>
                <Box h={"20px"} />
                <Box
                    backgroundColor="white"
                    borderRadius="10px"
                    boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                    px={5}
                    mb={"20px"}
                    py="10px"
                >
                    <Flex justifyContent="space-between" >
                        <HStack gap={5}>
                            <Image
                                src={"https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fimage%2033.png?alt=media&token=b684c476-3c31-4d65-a414-dbcf461b3d0d"}
                                alt={``}
                                maxWidth='35%'
                                mx='auto'
                            />
                            <Stack gap={1}>
                                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>52718058493 </Text>
                                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#4A4A4A"}> Andi Sufjan</Text>
                            </Stack>
                        </HStack>
                        <Center>
                            <Text fontFamily="Poppins" fontWeight={"regular"} color={"#00AA12"} fontStyle="italic" cursor={"pointer"}> Ganti</Text>

                        </Center>
                    </Flex>
                </Box>
                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"} fontSize={"15px"}>
                    Nominal Penarikan
                </Text>
                <Box h={"8px"} />
                <Box
                    backgroundColor={'#f7f7f7'}
                    borderRadius="10px"
                    border={`1px solid ${(number.length > 1) ? "#00AA12" : "#f7f7f7"}`}
                    px={"20px"}
                    mb={"10px"}
                    py="10px"
                >
                    <HStack>
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"} fontSize={"15px"}>Rp </Text>
                        <Input
                            type="number"
                            placeholder=""
                            fontFamily="Poppins"
                            value={number}
                            borderColor="transparent"
                            _focus={{ borderColor: 'transparent' }}
                            ps={"0"}
                            fontWeight={"semibold"}
                            color={"#00AA12"}
                            onChange={handleNumberChange}
                        />
                    </HStack>

                </Box>

                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#4A4A4A"} > Saldo Tersedia : Rp 120.000</Text>

                <Divider my={"5px"} />
                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#F25650"} > Biaya Transfer : -Rp 1.500</Text>

                <div className="fixed z-20 bottom-0 left-0 w-full bg-white px-3 ">
                    <div className="container">
                        <Box
                            borderRadius="15px"
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
                                <Text fontFamily="Poppins" textAlign="center" w="100%" fontWeight="medium" fontSize="13px" color="white" mt={"3px"}>
                                    Transfer
                                </Text>
                            </Flex>
                        </Box>
                    </div>
                </div>
            </Stack>
        </DashboardLayout>
    );
}
