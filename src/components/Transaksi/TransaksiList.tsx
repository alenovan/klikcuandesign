
import {
    Box, Stack,
    Text,
    Container,
    Flex,
    Image,
    Divider,
    HStack
} from "@chakra-ui/react";

type TransaksiListProps = {
};

const data = [
    {
        time: "Hari Ini, 01 Oktober 2023",
        data: [
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Finstagram-2-1-logo%202.png?alt=media&token=03758d37-511b-46bb-a154-beb82912a4b0",
                target: "@makana",
                tugas: "Username follow ",
                notransaksi: "ID 12426172",
                time: "19.00 PM",
                status: "PENDING",
                price: 500,
            },
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Finstagram-2-1-logo%202.png?alt=media&token=03758d37-511b-46bb-a154-beb82912a4b0",
                target: "@makana",
                tugas: "Username follow ",
                notransaksi: "ID 12426172",
                time: "19.00 PM",
                status: "PENDING",
                price: 500,
            }
        ]
    }, {
        time: "Rabu, 25 September 2023",
        data: [
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Finstagram-2-1-logo%202.png?alt=media&token=03758d37-511b-46bb-a154-beb82912a4b0",
                target: "@makana",
                tugas: "Username follow ",
                notransaksi: "ID 12426172",
                time: "19.00 PM",
                status: "COMPLETED",
                price: 500,
            },
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Finstagram-2-1-logo%202.png?alt=media&token=03758d37-511b-46bb-a154-beb82912a4b0",
                target: "@makana",
                tugas: "Username follow ",
                notransaksi: "ID 12426172",
                time: "19.00 PM",
                status: "COMPLETED",
                price: 500,
            }
        ]
    },

]



const TransaksiList = (props: TransaksiListProps) => {
    return (
        <Box mb={20}>
            {data?.map((item, i) => (
                <Stack mb={"25px"}>
                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"} mb={2}>{item.time}</Text>
                    {item.data?.map((detail, i) => (
                        <>
                            <Box
                                backgroundColor="white"
                                borderRadius="10px"
                                boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                                px={5}
                                py="10px"
                            >
                                <Stack>
                                    <Flex justifyContent="space-between">
                                        <Flex>
                                            <Box
                                                width='56px'
                                                height='56px'
                                                backgroundColor='rgba(0, 170, 18, 0.09)'
                                                padding='16px'
                                                borderRadius='16px'
                                                display='inline-flex'
                                                boxShadow='0px 5px 10px rgba(56, 89, 147, 0.05)'
                                                mx='auto'
                                                mb={2}>
                                                <Image
                                                    src={detail.icon ?? ""}
                                                    alt={`${detail.icon} `}
                                                    maxWidth='100%'
                                                    mx='auto'
                                                />
                                            </Box>
                                            <Stack ms={4} gap={0}>
                                                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>Username follow </Text>
                                                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>@makana</Text>
                                                <Text fontFamily="Poppins" fontWeight={"light"} color={"#4A4A4A"} mt={2}>ID 12426172</Text>
                                            </Stack>
                                        </Flex>
                                        <Stack textAlign={"right"}>
                                            <Text color={"#898989"} fontFamily="Poppins">20.00 PM</Text>
                                            <Box
                                                as='span'
                                                display='inline-block'
                                                py={1}
                                                px={2}
                                                fontFamily="Poppins" fontWeight={"semibold"}
                                                borderRadius={10}
                                                bg={detail.status === "COMPLETED" ? 'rgba(67, 214, 160, 0.21)' : 'rgba(255, 120, 77, 0.16)'}
                                                fontSize='xs'
                                                color={detail.status === "COMPLETED" ? '#079D49' : '#F7971E'}>
                                                {detail.status === "COMPLETED" ? 'Sukses' : 'Menunggu'}
                                            </Box>
                                        </Stack>
                                    </Flex>
                                    <Divider />
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"}>Rp 500</Text>
                                        <Box
                                            borderRadius="full"
                                            border="1px"
                                            px={4}
                                            py={2}
                                            borderColor="#00AA12"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            cursor="pointer"
                                            _hover={{
                                                bg: "gray.100",
                                            }}
                                        >
                                            <Text fontFamily="Poppins" fontWeight="medium" fontSize="13px" color="#00AA12" mr={"5px"}>
                                                Kerjakan Lagi
                                            </Text>
                                        </Box>
                                    </HStack>


                                </Stack>
                            </Box>

                        </>
                    ))}


                </Stack>

            ))}

        </Box >
    );
};

export default TransaksiList;
