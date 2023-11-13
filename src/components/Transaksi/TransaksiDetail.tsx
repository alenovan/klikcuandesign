
import { Container, Stack } from "@chakra-ui/react";
import TransaksiDetailStatus from "./TransaksiDetailStatus";
import TransaksiButton from "./TransaksiButton";





const TransaksiDetail = () => {
    return (
        <Stack>
            <TransaksiDetailStatus />
            <TransaksiButton />
        </Stack >
    );
};

export default TransaksiDetail;
