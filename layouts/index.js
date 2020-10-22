import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Box
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
// import ViewCounter from '../components/ViewCounter';
import BlogSeo from '../components/BlogSeo';


const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://cwmoon.com/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <BlogSeo url={`https://cwmoon.com/journal/${slug}`} {...frontMatter} />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="C.W. Moon"
                src="https://bit.ly/34WFAj1"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}
                {'C.W. Moon / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
              {` • `}
              {/* <ViewCounter id={slug} /> */}
            </Text>
          </Flex>
        </Flex>
        {children}
        <Subscribe />
        <Box alignSelf='center'>
          <Link href={discussUrl(slug)} isExternal>
            {'Discuss on Twitter'}
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
