
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
import NewsListItem from "./NewsListItem";

type NewsListProps = {
    limit?: number;
    link?: String;
};

const menu = [
    {
        text: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tortor a nunc ut felis.",
        title: "Makin Seru!",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FFrame%201.png?alt=media&token=1825c3e7-1b2d-4051-bf2d-3b87c94b3538",
        link: ""
    },
]



const NewsList = (props: NewsListProps) => {
    const { limit, link } = props;

    return (
        <Stack  >
            {menu?.map((item, i) => (
                <NewsListItem
                    image={item.icon}
                    title={item.title}
                    body={item.text}
                />
            ))}
        </Stack>
    );
};

export default NewsList;
