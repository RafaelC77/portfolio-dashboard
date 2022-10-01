import {
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { BsHouseFill, BsPeopleFill, BsBox } from "react-icons/bs";
import NextLink from "next/link";

export function Sidebar() {
  return (
    <Flex flexDir="column" h="100%" w={200} align="center" py={10}>
      <Heading mb={24}>Dash</Heading>

      <nav>
        <List spacing={4}>
          <ListItem>
            <NextLink href="/" passHref>
              <Link>
                <ListIcon as={BsHouseFill} />
                Dashboard
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/" passHref>
              <Link>
                <ListIcon as={BsPeopleFill} />
                Costumers
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/" passHref>
              <Link>
                <ListIcon as={BsBox} />
                Products
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </nav>
    </Flex>
  );
}
