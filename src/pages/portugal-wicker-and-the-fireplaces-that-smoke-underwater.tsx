import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Subscribe from "../components/Subscribe";
import SubscribeAlt from "../components/SubscribeAlt";
import NextLink from 'next/link';
import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "../components/PostItem";
import TagLink from "../components/TagLink";
import Pagination from "../components/Pagination";
import { TagContent } from "../lib/tags";
import { useColorMode, Progress, Avatar, Box, Button, Heading, Text, Flex, Stack, Link, Image} from '@chakra-ui/core';
import PostList from "../components/PostList";
import {
  SimpleGrid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";
import { MdLibraryBooks, MdAssignment} from "react-icons/md";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>



export default function Index() {
  return (
    <Layout>
      <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="700px"
    >
  <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="700px"
        >
      <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
           Portugal Wicker and the Fireplaces That Smoke Underwater
      </Heading>
      </Flex>
      <Box
          justifyContent="center"
          alignItems="center"
          maxWidth="400px"
        >
      <Image objectFit="cover" alignContent="center" borderRadius="20" alignSelf="center" boxShadow="2xl" src="Portugal_Wicker.png" alt="Portugal Wicker and The Fireplaces that Smoke Underwater Cover">
      </Image>
      </Box>

      
         
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
          <Subscribe />
       </Stack>
    </Layout>
  );

