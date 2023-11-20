'use client';

import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import {
    Stack,
    Text, Image, Container, Box, Heading, Flex
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const ArtikelDetail = () => {
    const router = useRouter();
    return (
        <DashboardLayout
            bottomNavigation={false}
            meta={{
                title: 'Beli Followers Tik Tok | Jasa Followers Tik Tok',
                description:
                    'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.',
            }}
            navbarHeader={{
                showBackButton: false,
                title: "Label Text"

            }}
        >
            <Stack>
                <Flex justifyContent="space-between" alignItems="center" mt="40px" mb="20px" mx="15px">
                    <Box display="flex" gap={4} alignItems="center">
                        <Box cursor="pointer" onClick={() => router.back()}>
                            <AppIcon src={"chevron-left"} color={"black"} />
                        </Box>
                        <Heading fontSize="18px" fontFamily="Poppins" fontWeight="semibold" color={"#001F25"} mt={"1px"} >Label Text</Heading>
                    </Box>
                    <AppIcon src={"share"} color={"black"} cursor="pointer" mt="1px" />
                </Flex>



                <Image
                    mx={{ base: "0", md: "15px" }}
                    w={"100%"}
                    src={"https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FFrame%201%20big.png?alt=media&token=23b821c4-a398-4308-bba2-485729cf0cd8"}
                    alt={` `}
                />

                <Container px={"15px"}>
                    <Stack gap={2} mt={"20px"}>
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#1D1D1D"} fontSize={{ base: "15px", md: "17px" }}>Klik Cuan Satu Kali Tap, Hasilkan Uang </Text>
                        <Text fontFamily="Poppins" fontSize={{ base: "13px", md: "13px" }} color={"#6D6B6E"}>22 MEI 2023</Text>
                        <Text fontFamily="Poppins" fontSize={{ base: "15px", md: "15px" }} color={"#6D6B6E"}>Lorem ipsum dolor sit amet consectetur. Venenatis ultrices rutrum lectus imperdiet. Elementum ac varius netus phasellus etiam elementum nunc faucibus. Eu morbi at non in fringilla in adipiscing tristique. Elit elementum purus vitae urna est enim rhoncus diam. Ultrices lacus sollicitudin ullamcorper scelerisque viverra. Laoreet aliquam morbi duis est elementum senectus nullam quis. Elementum et tortor enim pellentesque orci habitant lacinia risus morbi. Nisl enim parturient scelerisque faucibus dolor. Lectus amet sit viverra sed volutpat curabitur consequat. Dignissim id ut tristique malesuada.</Text>
                    </Stack>
                </Container>
            </Stack>

        </DashboardLayout>
    );
};

export default ArtikelDetail;
