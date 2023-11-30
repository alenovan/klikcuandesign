"use client";
import AppIcon from "@/components/AppIcon";
import ImageUpload from "@/components/Input/ImageUpload";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import MisiList from "@/components/Misi/MisiList";
import AddNewBankAccountForm from "@/modules/AddNewBankAccountForm";
import { Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Container, Image, HStack, Stack, Divider, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, FormControl, Input } from '@chakra-ui/react';
import { useState } from "react";
export default function MisiSubDetailValidasi() {
    const [activeTab, setActiveTab] = useState(0)
    const [isAccordionOpenTutorial, setIsAccordionOpenTutorial] = useState(false);
    const [isAccordionOpenStepSuccess, setIsAccordionOpenStepSuccess] = useState(false);

    const toggleAccordionTutorial = () => {
        setIsAccordionOpenTutorial(!isAccordionOpenTutorial);
    };

    const toggleAccordionSuccess = () => {
        setIsAccordionOpenStepSuccess(!isAccordionOpenStepSuccess);
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
                title: "Detaill Misi"
            }}>
            <Container px="10px">
                <Box mt={"20px"}>
                    <HStack alignItems="flex-start">
                        <Image
                            src={"https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012336.png?alt=media&token=d879c3d5-7d43-46a9-aaf6-a6bfa610ac69"}
                            alt={`test`}
                            maxWidth='100%'
                        />
                        <Stack ms={4} gap={3}>
                            <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>Validasi Follow Akun Instagram </Text>
                            <HStack whiteSpace="nowrap">
                                <Text fontFamily="Poppins" fontWeight="semibold" color="#00AA12" as='u'>@issa.dee</Text>
                                <Text fontFamily="Poppins" color="#4A4A4A">memfollow akun </Text>
                                <Text fontFamily="Poppins" fontWeight="semibold" color="#00AA12" as='u'>@makana</Text>
                            </HStack>
                        </Stack>
                    </HStack>
                </Box>
                <Divider my={"18px"} color={"#E8E8E8"} borderWidth={"1.1px"} />
                <Box >
                    <Flex gap={2}>
                        <Box w={"20px"}>
                            <AppIcon src={"timeicon"} color={"black"} />
                        </Box>
                        <HStack gap={0}>
                            <Text fontFamily="Poppins" color={"#4A4A4A"}>Jumlah validasi :</Text>
                            <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"} ms={"10px"}>1</Text>
                            <Text fontFamily="Poppins" color={"#4A4A4A"}>/2</Text>
                        </HStack>
                    </Flex>

                </Box>
                <Divider my={"16px"} color={"#E8E8E8"} borderWidth={"1.1px"} />
                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"} fontSize={"16px"}>Panduan Pengerjaan</Text>
                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"20px"}>Deskripsi Misi</Text>
                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} mt={"10px"}>Lorem ipsum dolor sit amet consectetur. Sit ornare maecenas nulla elementum. Sed.</Text>

                <Accordion mt={5} allowMultiple>
                    <AccordionItem style={{ borderWidth: 0, marginLeft: -17, borderColor: 'transparent', }} p={0}>
                        <AccordionButton onClick={toggleAccordionTutorial}>
                            <Box flex="1" textAlign="left">
                                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#1D1D1D"} fontSize={"16px"}>Cara Pengerjaan</Text>
                            </Box>
                            {isAccordionOpenTutorial ? <AppIcon src={"chevron-down-primary"} color={"black"} /> : <AppIcon src={"chevron-up-primary"} color={"black"} />}

                        </AccordionButton>
                        <AccordionPanel>
                            <Stack p={2}>
                                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} >1.  Lorem ipsum dolor sit amet consectetur. Faucibus posuere dictumst nunc amet velit.</Text>
                                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} >2.  Lorem ipsum dolor sit amet consectetur. Faucibus posuere dictumst nunc amet velit.</Text>
                                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} >2.     Lorem ipsum dolor sit amet consectetur. Faucibus posuere dictumst nunc amet velit.</Text>

                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion mt={1} allowMultiple>
                    <AccordionItem style={{ borderWidth: 0, marginLeft: -17, borderColor: 'transparent', }} p={0}>
                        <AccordionButton onClick={toggleAccordionSuccess}>
                            <Box flex="1" textAlign="left">
                                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#1D1D1D"} fontSize={"16px"}>Cara Sukses</Text>
                            </Box>
                            {isAccordionOpenStepSuccess ? <AppIcon src={"chevron-down-primary"} color={"black"} /> : <AppIcon src={"chevron-up-primary"} color={"black"} />}

                        </AccordionButton>
                        <AccordionPanel>
                            <Stack p={2}>
                                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} >1.  Lorem ipsum dolor sit amet consectetur. Faucibus posuere dictumst nunc amet velit.</Text>
                                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} >2.  Lorem ipsum dolor sit amet consectetur. Faucibus posuere dictumst nunc amet velit.</Text>
                                <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} >2.     Lorem ipsum dolor sit amet consectetur. Faucibus posuere dictumst nunc amet velit.</Text>

                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Divider my={"16px"} color={"#E8E8E8"} borderWidth={"1.1px"} />
                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"} fontSize={"16px"}>Submit Pengerjaan</Text>
                <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"20px"}>Screenshot Follow Akun Target</Text>
                <Box my={"15px"}>
                    <ImageUpload key={"B"} />
                </Box>
                <Box h={"80px"} />
                <div className="fixed z-20 bottom-0 left-0 w-full bg-white px-3 ">
                    <div className="container">

                        <Box
                            borderRadius="15px"
                            py={"15px"}
                            mx={"20px"}
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
                                    Submit Pengerjaan
                                </Text>
                            </Flex>
                        </Box>

                    </div>
                </div >


                <Box h={"10px"} />
            </Container>
        </DashboardLayout>
    );
}
