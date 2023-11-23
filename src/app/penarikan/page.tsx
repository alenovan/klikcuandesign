import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Center, Divider, Flex, HStack, Stack, Text, Image } from "@chakra-ui/react";

export default function Penarikan() {

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
                title: "Penarikan"
            }}>
            <Stack>
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
                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"} fontSize={"15px"}>
                    Pilih Rekening Tujuan
                </Text>
                <Box h={"15px"} />
                {data?.map((item, i) => (

                    <>
                        <Box
                            key={i}
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
                                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>{item.norek} </Text>
                                        <Text fontFamily="Poppins" fontWeight={"regular"} color={"#4A4A4A"}>  {item.nama}</Text>
                                    </Stack>
                                </HStack>
                                <AppIcon src={"chevron-right-black"} color={"black"} />
                            </Flex>
                        </Box>
                    </>
                ))}
                <Box
                    borderRadius="20px"
                    color="#6D6B6E"
                    border="2px solid rgba(60, 60, 67, 0.30)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    h="45px"
                    cursor="pointer"
                    _hover={{
                        bg: "white",
                        color: "black",
                    }}
                >
                    <AppIcon src={"penarikan/plus"} color={"black"} />
                    <Text fontFamily="Poppins" fontWeight="medium" fontSize="13px">
                        Tambah Rekening Baru
                    </Text>
                </Box>

            </Stack>
        </DashboardLayout>
    );
}
