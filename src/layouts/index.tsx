import Head from "next/head";
import React from "react";
import styles from "../../public/styles/content.module.css";
import Author from "../components/Author";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import JsonLdMeta from "../components/meta/JsonLdMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Subscribe from "../components/Subscribe";
import TagButton from "../components/TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
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
import IframeResizer from 'iframe-resizer-react';
import { parseISO, format } from 'date-fns';





type Props = {
  title: string;
  date: Date;
  slug: string;
  description: string;
  tags: string[];
  author: string;
};
export default function Index({
  title,
  date,
  slug,
  author,
  tags,
  description,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;


  return ({ children: content }) => {
    return (
      <Layout>
        <BasicMeta
          url={`/posts/${slug}`}
          title={title}
          keywords={keywords}
          description={description}
        />
        <TwitterCardMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <OpenGraphMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <JsonLdMeta
          url={`/posts/${slug}`}
          title={title}
          keywords={keywords}
          date={date}
          author={authorName}
          description={description}
        />
       

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
            {title}
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
               <Text fontSize="sm" color="fafafa">
               <Author author={getAuthor(author)} />
               {` / `}
               {format(new Date(), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            </Flex>
            </Flex>
            {content}
          <article>
            <ul className={"tag-list"}>
              {tags.map((it, i) => (
                <li key={i}>
                  <TagButton tag={getTag(it)} />
                </li>
              ))}
            </ul>
          </article>
          <Subscribe/>

          </Stack>
          <footer>
            <div className={"social-list"}>
              <SocialList />
            </div>
          </footer>
        <style jsx>
          {`
            .container {
              display: block;
              max-width: 36rem;
              width: 100%;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
            }
            .metadata div {
              display: inline-block;
              margin-right: 0.5rem;
            }
            article {
              flex: 1 0 auto;
            }
            .tag-list {
              list-style: none;
              text-align: right;
              margin: 1.75rem 0 0 0;
              padding: 0;
            }
            .tag-list li {
              display: inline-block;
              margin-left: 0.5rem;
            }
            .social-list {
              margin-top: 3rem;
              text-align: center;
            }

            @media (min-width: 769px) {
              .container {
                display: flex;
                flex-direction: column;
              }
            }
          `}
        </style>
       
      </Layout>
    );
  };
}
