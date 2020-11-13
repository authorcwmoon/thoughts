import { PostContent } from "../lib/posts";
import Date from "./Date";
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';
// import ViewCounter from './ViewCounter';



type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (

    <NextLink href={"/posts/" + post.slug} passHref>

          <Box as="a" mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {post.title}
            </Heading>
            <Text
              color="gray.500"
              minWidth="105px"
              textAlign={['left', 'right']}
              mb={[4, 0]}
            >
              {/* —{format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')} */}
              {/* {`${views ? format(views) : '–––'} views`} */}
            </Text>
          </Flex>
          <Flex
           width="100%"
           align="center"
           justifyContent="flex"
           flexDirection={['column', 'row']}
         >
          <Text as="i" mr={2} color="gray.500">  
          <Date  date={parseISO(post.date)} /> </Text>
          {" - "}
            <Text ml={2} color="gray.500">  
            {"Author C.W. Moon"} </Text>
            <Text ml={2} color="gray.500">  
            {" - "}{post.readtime}{" min read"}</Text>
            {/* <ViewCounter id={post.slug} /> */}
         {/* <Text as="i" mt={2} mb={2} color="gray.500">—{frontMatter.readingTime.text}</Text> */}
          </Flex>
          <Text mt={2} mb={2} >{post.summary}</Text>
          <Text as="i" mt={8} color="gray.500">Continue reading...</Text>
        </Box>
    </NextLink>
  );
}
