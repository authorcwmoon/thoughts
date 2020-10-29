import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Subscribe from "../components/Subscribe";

import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "../components/PostItem";
import TagLink from "../components/TagLink";
import Pagination from "../components/Pagination";
import { TagContent } from "../lib/tags";
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';
import PostList from "../components/PostList";


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
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl" fontWeight={200}>
            Preface
          </Heading>
          <Text>
           Captain Crunch taught me to read. Sugar coated word searches at breakfast turned into infinite scroll on my twitter feed. I couldn't keep my thoughts to 280 characters, so instead I share them here. This journal is a collection of ordinary stories for extraordinary people. I send regular newsletters, the paper kind, with the hope that you'll read it with your coffee.  Thanks for being here.
           </Text>
         </Flex>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
          <Subscribe />
       </Stack>
    </Layout>
  );
}
