import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

// import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
// import ProjectCard from '../components/ProjectCard';

import { frontMatter as introGuide } from './blog/introductions-and-other-important-baseline-information.mdx';
// import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx';
// import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
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
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl" fontWeight={200}>
            Preface
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
           Captain Crunch taught me to read. Sugar coated word searches at breakfast turned into infinite scroll on my twitter feed. I couldn't keep my thoughts to 280 characters, so instead I share them here. This journal is a collection of ordinary stories for extraordinary people. I send regular newsletters, the paper kind, with the hope that you'll read it with your coffee.  Thanks for being here.
           </Text>
         </Flex>

          <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={0}
        >
          <Heading letterSpacing="tight" mb={0} size="xl" alignSelf="Center" textAlign="center" fontWeight={100}>
            Table of Contents
          </Heading>
          <Heading letterSpacing="tight" mt={4} mb={4} minW={2} fontSize="25px" fontWeight={100}>
           Chapter 1......Childhood and other things children are bad at. 
          </Heading>
          <Flex ml={4} minW={0}>
          <BlogPost {...introGuide} />
          </Flex>



          <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={0}
        >
          <Heading letterSpacing="tight" mt={4} mb={4} fontSize="25px" fontWeight={100}>
          Chapter 4......Collection of my most popular short stories. 
          </Heading>
          <Flex ml={4}>
          <BlogPost {...introGuide} />
          </Flex>
          </Flex>

{/* 
          <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={0}
        >
          <Heading letterSpacing="tight" mt={4} mb={4} fontSize="25px" fontWeight={100}>
          Chapter 8......Career advice and thought alternatives.
          </Heading>
          <Flex ml={4}>
          <BlogPost {...introGuide} />
          </Flex>
          </Flex> */}




          {/* <Heading isTruncated maxWidth="700px" letterSpacing="tight" mt={4} mb={4} size="xl" fontWeight={100}>
           Chapter 2......Tests Mex, and a lot of ther flexy test to flex and test.
          </Heading>
          <Flex ml={4}>
          <BlogPost {...introGuide} />
          </Flex> */}









          </Flex>

          {/* <BlogPost {...stripeDesign} />
          <BlogPost {...monorepo} /> */}
    
        {/* <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <ProjectCard
            title="React 2025"
            description="Build and deploy a modern Jamstack application using the most popular open-source software."
            href="https://react2025.com/"
            icon="react2025"
          />
          <ProjectCard
            title="Mastering Next.js"
            description="A free video course for building static and server-side rendered applications with Next.js and React."
            href="https://masteringnextjs.com/"
            icon="nextjs"
          />
          <ProjectCard
            title="jamstackfns"
            description="The best serverless functions for JAMstack applications. Deploy to Vercel or Netlify for your static site."
            href="https://jamstackfns.com/"
            icon="jamstackfns"
          />
        </Flex> */}
        {/* <Timeline /> */}
        {/* <Subscribe /> */}
      </Stack>
    </Container>
  );
};

export default Index;
