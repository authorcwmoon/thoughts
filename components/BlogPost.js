import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
// import format from 'comma-number';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';
import { parseISO, format } from 'date-fns';


import fetcher from '../lib/fetcher';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  // const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  // const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text
              color="gray.500"
              minWidth="105px"
              textAlign={['left', 'right']}
              mb={[4, 0]}
            >
              —{format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              {/* {`${views ? format(views) : '–––'} views`} */}
            </Text>
          </Flex>
          <Flex
           width="100%"
           align="center"
           justifyContent="flex"
           flexDirection={['column', 'row']}
         >
          <Text as="i" color="gray.500">{frontMatter.by} {'C.W. Moon '} </Text>
          <Text as="i" mt={2} mb={2} color="gray.500">—{frontMatter.readingTime.text}</Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
