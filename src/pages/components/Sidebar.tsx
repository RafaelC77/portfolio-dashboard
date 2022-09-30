import { Flex, Heading, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import NextLink from "next/link";

export function Sidebar() {
  return (
    <Flex flexDir="column" h="100%" w={200} align="center" py={10}>
      <Heading mb={24}>Dash</Heading>

      <nav>
        <UnorderedList>
          <ListItem>
            <NextLink href="/" passHref>
              <Link>Home</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/" passHref>
              <Link>About</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/" passHref>
              <Link>Contact</Link>
            </NextLink>
          </ListItem>
        </UnorderedList>
      </nav>
    </Flex>
  );
}
