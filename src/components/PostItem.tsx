import { PostContent } from "../lib/posts";
import Date from "./Date";
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';



type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (

    <NextLink href={"/posts/" + post.slug} passHref>

          <Box mb={8} display="block" width="100%">
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
          <Text as="i" color="gray.500">  
          <Date  date={parseISO(post.date)} /> </Text>
          {" - "}
            <Text as="i" color="gray.500">  
            {post.author} </Text>
          {/* <Text as="i" mt={2} mb={2} color="gray.500">—{frontMatter.readingTime.text}</Text> */}
          </Flex>
          <Text mt={2} mb={2} >{post.summary}</Text>
          <Text as="i" mt={8} color="gray.500">Continue reading...</Text>
        </Box>
    </NextLink>
  );
}
