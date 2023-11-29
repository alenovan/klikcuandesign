'use client';

import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { Box, FormControl, Input, Stack, Text, Container, Button, HStack, Center } from "@chakra-ui/react";
import AppIcon from "@/components/AppIcon";
const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-spen-sans",
  weight: "600",
});

const SignUpBanner = () => {
  return (
    <Stack>
      <div className="bg-[url('/assets/images/sign-shape.png')] w-full min-h-[350px] bg-cover bg-no-repeat bg-bottom p-4">
        <Stack>
          <Box>
            <p
              className={cn(
                "mb-2 text-white font-semibold text-lg",
                fontSans.variable
              )}
            >
              KlikCuan
            </p>
            <img
              src="/assets/images/wallet.svg"
              alt="wallet"
              className="mx-auto mb-3 w-[250px] max-w-full"
            />
          </Box>

        </Stack>

      </div>
      <Container px={"20px"}>
        <Stack >
          <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#1D1D1D"} fontSize={"25px"}>Selamat Datang </Text>
          <FormControl id='alamat' mt={"12px"}>
            <Input
              borderRadius={"5px"}
              placeholder='Masukan email'
              type='text'
              h={"45px"}
              bg='rgba(239, 239, 239, 0.51);'
              fontSize={"13px"}
              fontFamily='Poppins'
              color='#1A1A1A'
              onChange={(e) => { }}
            />
          </FormControl>
          <FormControl id='alamat' mt={"12px"}>
            <Input
              borderRadius={"5px"}
              placeholder='Masukan password'
              type='text'
              h={"45px"}
              bg='rgba(239, 239, 239, 0.51);'
              fontSize={"13px"}
              fontFamily='Poppins'
              color='#1A1A1A'
              onChange={(e) => { }}
            />
          </FormControl>
          <Box textAlign={"right"} mb={"40px"}>
            <Text fontFamily="Poppins" color={"#F25650"} fontSize={"13px"}>Lupa password ? </Text>
          </Box>
          <Box
            borderRadius="15px"
            py={"15px"}
            mb={"15px"}
            color={"#1D1D1D"}
            background="#EDEEF0"
            display="flex"
            alignItems="center"
            textAlign={"center"}
            cursor="pointer"
            justifyContent="center"
            _hover={{
              bg: "gray.100",
              color: "black"
            }}
          >
            <AppIcon src='icon-google' mr={"10px"} />
            <Text fontFamily="Poppins" textAlign="center" fontWeight="semibold" fontSize="15px" color="#1D1D1D">
              Masuk dengan Google
            </Text>
          </Box>
          <Box
            borderRadius="15px"
            py={"15px"}
            color={"White"}
            background="#00AA12"
            display="flex"
            alignItems="center"
            textAlign={"center"}
            cursor="pointer"
            _hover={{
              bg: "gray.100",
              color: "black"
            }}
          >
            <Text fontFamily="Poppins" textAlign="center" w="100%" fontWeight="medium" fontSize="13px" color="white" mr={"5px"}>
              Buat Akun
            </Text>
          </Box>
          <Center mt={2} cursor={"pointer"}>
            <HStack>
              <Text fontFamily="Poppins" textAlign="center" fontSize="13px" color="rgba(0, 0, 0, 0.60)" >
                Belum punya akun?
              </Text>
              <Text fontFamily="Poppins" textAlign="center" fontWeight="medium" fontSize="13px" color="#00AA12" >
                Daftar
              </Text>
            </HStack>
          </Center>
        </Stack>
      </Container>
    </Stack>

  );
};

export default SignUpBanner;
