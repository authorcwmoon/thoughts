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
            Bio
          </Heading>
          <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
        
          <Text>
          I'm C.W. Moon. I've been writing for the past fourteen years and have recently started to publish my work online. Professionally, I'm Cofounder of OpenLoop, a Techstars Portfolio company. In my spare time I'm currently studying for my Master's degree in positive coaching. 
      
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
           </Text>
           <Text mt={2} as="b">

           </Text>

           <SubscribeAlt/>
           
           </Flex>


           <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
           <Heading letterSpacing="tight" mb={2} as="h2" size="xl" fontWeight={200}>
            What I Write
          </Heading>
          <Text>
           This journal hosts interviews, short stories, and other interesting content at the intersection of storytelling and entrepreneurship. 
          </Text>
          <Text mt={2}>
           Other works include regular health-tech articles on the OpenLoop website and my 2021 debut novel,
          <Link as="i" ml={1}>
                Portugal Wicker and the Fireplaces That Smoke Underwater.
          </Link>
          </Text>
           <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >

           <Heading letterSpacing="tight" mt={4} mb={2} as="h2" size="xl" fontWeight={200}>
            Works in Progress
          </Heading>
          <Text mt={2}>
          I post at least once on this site every week. If you have an idea for a story, interview guest, or any other cool topics, I can be reached at 
          <Link fontStyle="italics" rel="stylesheet" href="mailto:author@cwmoon.com" isExternal> author@cwmoon.com</Link>
         
          
            <SimpleGrid mt={4} columns={1} spacingY="20px" >
              <Box height="80px">
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="space-between"
                  maxWidth="700px"
                >
                <Link as="i" ml={1}>
                Novel - Portugal Wicker and the Fireplaces That Smoke Underwater
                </Link>
                <Text as="i" mr={4}>
                47%
                </Text>
                </Flex>
                  <Slider mt={2} value={47}>
                  <SliderTrack bg="gray.300" />
                  <SliderFilledTrack bg="gray.900" />
                  <SliderThumb size={6}>
                  <Box color="gray.900" as={MdLibraryBooks} />
                  </SliderThumb>
                  </Slider>      
                  </Box>


                  <Box height="80px">

                  <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="space-between"
                  maxWidth="700px"

                >
                <Text as="i" ml={1}>
                Journal Article - The Middles Part 1
                </Text>
                <Text as="i" mr={4}>
                100% Posted!
                </Text>
                </Flex>
                  <Slider mt={2} value={97}>
                  <SliderTrack bg="gray.300" />
                  <SliderFilledTrack bg="gray.900" />
                  <SliderThumb size={6}>
                  <Box color="gray.900" as={MdAssignment} />
                  </SliderThumb>
                  </Slider>      

                  </Box>

                  <Box height="80px">


                  <Flex
                      flexDirection="row"
                        justifyContent="space-between"
                        alignItems="space-between"
                        maxWidth="700px"
                      >
                      <Text as="i" ml={1}>
                      Journal Article - The Adventures of Captain Sprill Part Five
                      </Text>
                      <Text as="i" mr={4}>
                      11%
                      </Text>
                      </Flex>
                        <Slider mt={2} value={23}>
                        <SliderTrack bg="gray.300" />
                        <SliderFilledTrack bg="gray.900" />
                        <SliderThumb size={6}>
                        <Box color="gray.900" as={MdAssignment} />
                        </SliderThumb>
                        </Slider>      

                  </Box>





            <Box height="80px">


            <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="space-between"
                  maxWidth="700px"
                >
                <Text as="i" ml={1}>
                Interview Article - Dynamic Duo Series 
                </Text>
                <Text as="i" mr={4}>
                23%
                </Text>
                </Flex>
                  <Slider mt={2} value={23}>
                  <SliderTrack bg="gray.300" />
                  <SliderFilledTrack bg="gray.900" />
                  <SliderThumb size={6}>
                  <Box color="gray.900" as={MdAssignment} />
                  </SliderThumb>
                  </Slider>      

            </Box>

          </SimpleGrid>
          </Text>
        </Flex>
    

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
