import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Subscribe from "../components/Subscribe";
import NextLink from 'next/link';
import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "../components/PostItem";
import TagLink from "../components/TagLink";
import Pagination from "../components/Pagination";
import { TagContent } from "../lib/tags";
import { useColorMode, Box, Button, Heading, Text, Flex, Stack, Link } from '@chakra-ui/core';
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
          <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
            Bio
          </Heading>
          <Text>
          I'm C.W. Moon. I've been writing for the past fourteen years and have recently started to publish my work online. Professionally, I'm attaining my Masters in Positive Coaching while Cofounder of OpenLoop, a Techstars Portfolio company.  
           </Text>
         </Flex>
         <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Box alignSelf="center">
          <NextLink href="/posts" passHref>
            <Button   size="sm" as="a" variant="outline" color ="fafafa" mb={4}>
              {'Read my journal ->'}
            </Button>
          </NextLink>
          </Box>


          <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
            Preface - Who Should Read My Journal
          </Heading>
          <Text>
          If you've burnt yourself out on self-help gurus and life advice podcasts this is a place for you. I boil down notes from extraordinary people and turn them into fiction.  My characters learn the things I wish I knew, in the magical ways I wish I could.  
           <Text mt={2}>
           This journal is a collection of short stories on my path to publish my debut novel,
           <Text as="i" ml={1}>
           Portugal Wicker and the Fireplaces That Smoke Underwater.
           </Text>
           </Text>
           
           </Text>
         </Flex>
         <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
         <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
           My Top Collections
          </Heading>
          <Flex mt={4}
           flexDirection="column"
           justifyContent="flex-start"
           alignItems="flex-start"
           maxWidth="700px">
          <Link fontStyle="italic" fontSize="xl" href="/posts/tags/sprill"><a>The Adventures of Captain Sprill</a></Link>
          <Text mt={4}>
          Captain Sprill has a map that’s been blessed by the priests and guaranteed to find him treasure.  His parents raised him on the straight and narrow with no distractions.  But he’s soon to meet the  the infamous Geraldo Hidalgo who sets him on a course without maps, or plans, or “any other poppy-cock.”            </Text>
          </Flex>
          <Flex mt={4}
           flexDirection="column"
           justifyContent="flex-start"
           alignItems="flex-start"
           maxWidth="700px">
          <Link  fontStyle="italic" fontSize="xl"  href="/posts/tags/thoughts"><a>Thoughts That Help Me Be Happier</a></Link>
          <Text mt={4}>
            From time to time, if I haven't figured out the right way to parse my thoughts through fiction, I'll share general thoughts on being happier. 
           </Text>
           <Box alignSelf="center">
          <NextLink href="/posts" passHref>
            <Button   size="sm" as="a" variant="outline" color ="fafafa" m={4}>
             {'View All Posts ->'}
            </Button>
          </NextLink>
          </Box>

          </Flex>
         </Flex>
         
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
          <Subscribe />
       </Stack>
    </Layout>
  );
}
