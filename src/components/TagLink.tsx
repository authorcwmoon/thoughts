import Link from "next/link";
import { TagContent } from "../lib/tags";
import { Box } from "@chakra-ui/core";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Box mr={2}>
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
      <a>{"#" + tag.name}</a>
    </Link>
    </Box>
  );
}
