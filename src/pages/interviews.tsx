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
import { useColorMode, Progress, Avatar, Box, Button, Heading, Text, Flex, Stack, Link } from '@chakra-ui/core';
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
          alignItems="flex-start"
          maxWidth="700px"
        >
           
          <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
            I'd like to get to know you!
          </Heading>
          <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
        
          <Text>
          And I my audience would as well.  My interview process is a little different than traditional podcasts or biopics. If this sounds like something you'd be interested in, please shoot me a line!
      
           </Text>
           <Avatar
                size="xl"
                name="C.W. Moon"
                src="https://bit.ly/34WFAj1"
                mr={2}
              />
           </Flex>
         </Flex>
         <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Box alignSelf="center">
          <Link href="mailto:author@cwmoon.com" isExternal>
            <Button   size="sm" as="a" variant="outline" color ="fafafa" mb={4}>
              {'Connect with me->'}
            </Button>
          </Link>
          </Box>


          <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
            Who reads my journal.
          </Heading>
          <Text>
          Entrepreneurs, ficition lovers, and fans of long form reading are regulars of my site.  Each article is promoted across all my social channels and will link back to the site of your choice.  In addition to a great interview experience, I hope to help grow your following.
           </Text>
           <Text mt={2} as="b">

           </Text>
           
           </Flex>


           <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
           <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
           What we'll talk about. 
          </Heading>
          <Text>
            Whatever we want! But focused on: your favorite stories, entrepreneurship, and alternate realities.  

          </Text>
          </Flex>

           <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >

           <Heading letterSpacing="tight" mt={4} mb={2} as="h2" size="xl" fontWeight={200}>
           The questions I'll ask.
          </Heading>
          <Text mt={2}>
          These questions are favorites.  If you'd like to add to this list, we can collaborate on the best way to shape your story.
          </Text>
          <Heading letterSpacing="tight" mt={8} mb={2} as="h3" fontSize="l" fontWeight={200}>
           - How did you start building what your working on now?
          </Heading>

          <Heading letterSpacing="tight" mt={8} mb={2} as="h3" fontSize="l" fontWeight={200}>
           - Where do you consume most of your non-fiction content: video, podcast, books?
          </Heading>
          <Heading letterSpacing="tight" mt={8} mb={2} as="h3" fontSize="l" fontWeight={200}>
           - What was your favorite book growing up?
          </Heading>
          <Heading letterSpacing="tight" mt={8} mb={2} as="h3" fontSize="l" fontWeight={200}>
           - If you could cofound a business with a fictional character who would it be (can't be Tony Stark he's mine)?
          </Heading>
          <Heading letterSpacing="tight" mt={8} mb={2} as="h3" fontSize="l" fontWeight={200}>
           - If you could change one thing about the real world what would it be?
          </Heading>








          </Flex>
            
         
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
          <Subscribe />
       </Stack>
    </Layout>
  );
}
