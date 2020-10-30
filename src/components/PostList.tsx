import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import Layout from "./Layout";
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';
import Subscribe from "./Subscribe";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Heading>
        All posts /
        </Heading>
        <Flex 
              alignSelf="center"
              alignItems="flex-start"
              mr={2}
              pr={2}>
              {tags.map((it, i) => (
              <TagLink tag={it} /> 
        ))}
      </Flex>
        <Flex>
        <ul className={"post-list"}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        </Flex>
       
       <Flex alignSelf="center">
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
        </Flex>
        
      <Subscribe />
    </Stack>
  );
}
