
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

// eslint-disable-next-line import/no-unresolved, import/extensions;
import { frontMatter as blogPosts } from './blog/**/*.mdx';
// import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx';
// import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx';
// import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx';

const url = 'https://cwmoon.com/journal';
const title = 'Journal – C.W. Moon';
const description =
  'Small thoughts, big stories.';


const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
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
            mb={0}
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl" fontWeight={100}>
              Journal
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`This is the first online edition of my journal. I've added ${blogPosts.length} articles in the past two weeks. More each week.
                Use the search below to filter by title.`}

            </Text>
            <InputGroup my={4} mr={4} mb={0} w="100%">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          {!searchValue && (
            <Flex>
            </Flex>
          )}
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={0}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={100}>
             Search most popular contents
            </Heading>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Blog;