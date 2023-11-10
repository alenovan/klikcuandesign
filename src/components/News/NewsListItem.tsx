"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";


interface INews {
    image: string,
    body: string,
    title: string,
}
const NewsListItem = (props: INews) => {
    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="10px"
                mb={10}
                w="100%"
                boxShadow="md"
                backgroundColor="white"
            >
                <Box>
                    <Image
                        borderTopRadius="10px"
                        src={props.image}
                        w={"100%"}
                        alt="Deskripsi Gambar"

                    />
                </Box>
                <Flex align="center" justify="space-between" p={4} mt={2}>
                    <Box>
                        <Text fontFamily="Poppins" fontWeight="semibold" fontSize={"18px"}
                        >
                            {props?.title ??
                                ""}
                        </Text>
                        <Text fontFamily="Poppins" fontWeight="light" fontSize={"15px"} color={"#4A4A4A"}
                        >
                            {props?.body ??
                                ""}
                        </Text>
                    </Box>
                </Flex >
            </Box >
        </>


    );
};

export default NewsListItem;
