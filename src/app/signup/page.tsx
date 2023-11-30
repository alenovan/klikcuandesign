'use client';

import DashboardLayout from "@/components/Layout/DashboardLayout";
import EditButton from "@/components/Profile/EditButton";
import { Box, FormControl, HStack, Input, Select, Stack, Text, Container } from "@chakra-ui/react";

export default function SignUp() {

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
        title: "Lengkapi Data Diri"
      }}>
      <Container>
        <Stack>


          <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"20px"}>
            Nama Lengkap
          </Text>
          <FormControl id='nama-lengkap' >
            <Input
              borderRadius={"10px"}
              placeholder=' '
              type='text'
              bg='#F2F2F2'
              h={"45px"}
              fontSize={"13px"}
              fontFamily='Poppins'
              fontWeight='medium'
              color='#1D1D1D'
              onChange={(e) => { }}
            />
          </FormControl>

          <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"10px"}>
            Umur
          </Text>
          <HStack>
            <FormControl id='jenis-rekening'>
              <Select
                bg='#F2F2F2'
                borderRadius="10px"
                fontFamily='Poppins'
                fontSize={"13px"}
                fontWeight='medium'
                color='#1D1D1D'
                h={"45px"}
                placeholder='Umur kamu'
                onChange={(e) => { }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </FormControl>
            <Box

              backgroundColor="#F2F2F2"
              borderRadius="10px"
              p={"10px"}
            >
              <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} fontSize={"15px"} mx={"15px"}>
                Tahun
              </Text>
            </Box>
          </HStack>

          <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"10px"}>
            Nomor Whatsapp
          </Text>
          <HStack>
            <Box
              backgroundColor="#F2F2F2"
              borderRadius="10px"
              p={"10px"}
              mr={"10px"}
            >
              <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} fontSize={"15px"} mr={"5px"}>
                +62
              </Text>
            </Box>
            <FormControl id='alamat' >
              <Input
                borderRadius={"10px"}
                placeholder=' '
                type='text'
                bg='#F2F2F2'
                h={"45px"}
                fontSize={"13px"}
                fontFamily='Poppins'
                fontWeight='medium'
                color='#1D1D1D'
                onChange={(e) => { }}
              />
            </FormControl>

          </HStack>

          <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"10px"}>
            Alamat
          </Text>
          <FormControl id='alamat' >
            <Input
              borderRadius={"10px"}
              placeholder=' '
              type='text'
              h={"45px"}
              bg='#F2F2F2'
              fontSize={"13px"}
              fontFamily='Poppins'
              fontWeight='medium'
              color='#1D1D1D'
              onChange={(e) => { }}
            />
          </FormControl>

          <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"10px"}>
            Provinsi
          </Text>
          <Select
            bg='#F2F2F2'
            borderRadius="10px"
            fontFamily='Poppins'
            fontSize={"13px"}
            fontWeight='medium'
            h={"45px"}
            color='#1D1D1D'
            placeholder='Provinsi'
            onChange={(e) => { }}
          >
          </Select>
          <Text fontFamily="Poppins" fontWeight={"medium"} color={"#1D1D1D"} mt={"10px"}>
            Kota
          </Text>
          <Select
            bg='#F2F2F2'
            borderRadius="10px"
            fontFamily='Poppins'
            fontSize={"13px"}
            fontWeight='medium'
            h={"45px"}
            color='#1D1D1D'
            placeholder='Kota'
            onChange={(e) => { }}
          >
          </Select>
          <Box mx={"20px"}>
            <EditButton />
          </Box>
        </Stack>
      </Container>
    </DashboardLayout>
  );
}
