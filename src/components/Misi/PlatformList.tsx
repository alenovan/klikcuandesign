
import {
    Box,
    Center,
    Grid,
    GridItem,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    Container,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import PlatformlListItemItem from "./PlatformlListItem";

type PlatformListListProps = {
    limit?: number;
    platform: String;
    link?: String;
};

const PlatformListList = (props: PlatformListListProps) => {
    const { limit, platform, link } = props;
    return (
        <Container>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                <GridItem key={""}>
                    <PlatformlListItemItem
                        icon={""}
                        link={``}
                        title={""}
                    />
                </GridItem>
            </Grid>
        </Container>
    );
};

export default PlatformListList;
