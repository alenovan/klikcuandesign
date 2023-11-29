
import { Container, Stack } from "@chakra-ui/react";
import TransaksiDetailStatus from "./TransaksiDetailStatus";
import TransaksiButton from "./TransaksiButton";
import Link from "next/link";





const TransaksiDetail = () => {
    return (
        <Stack>
            <TransaksiDetailStatus />
            <Link passHref href={"/misi/instagram/1"}>
                <TransaksiButton />
            </Link>

        </Stack >
    );
};

export default TransaksiDetail;
