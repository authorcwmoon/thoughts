import React from "react";
import { PostContent } from "../lib/posts";
import { TagContent } from "../lib/tags";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import Layout from "./Layout";
import Link from "next/link";
import { useColorMode, Heading, Text, Flex, Stack, Box } from '@chakra-ui/core';

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function TagPostList({ posts, tag, pagination }: Props) {
  return (

    <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Box
          alignItems="flex-start"
          width="100%"
          justifyContent="space-between"
          flexDirection={['column', 'row']}
        >
        <Flex>
        <Heading color="gray.500">
        <Link  href={"/posts/"}>
        <a>{'All posts /' }</a>
      </Link>
        
        </Heading>
        <Heading  >
         <span><a>{tag.name}</a></span>
        </Heading>
        </Flex>
        </Box>
        <Flex>
  
         <ul>
           {posts.map((it, i) => (
             <li key={i}>
               <PostItem post={it} />
             </li>
           ))}
         </ul>
           </Flex>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => "/posts/tags/[[...slug]]",
          as: (page) =>
            page === 1
              ? "/posts/tags/" + tag.slug
              : `/posts/tags/${tag.slug}/${page}`,
        }}
      />
     
      </Stack>
  );
}
