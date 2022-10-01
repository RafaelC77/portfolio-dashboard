import {
  Avatar,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { BsHouseFill, BsPeopleFill, BsBox } from "react-icons/bs";
import NextLink from "next/link";

export function Sidebar() {
  return (
    <Flex flexDir="column" h="100%" w={240} align="center" py={10}>
      <Heading mb={20}>Dash</Heading>

      <Flex direction="column" align="center" mb={20}>
        <Avatar
          size="xl"
          name="Rafael Carvalho"
          src="https://github.com/rafaelc77.png"
        />
        <Text fontWeight="bold" mt={2}>
          Rafael Carvalho
        </Text>
        <Text fontSize="small" color="gray.500">
          rcarvalhobsb@gmail.com
        </Text>
      </Flex>

      <nav>
        <List spacing={6}>
          <ListItem>
            <NextLink href="/dashboard" passHref>
              <Link>
                <ListIcon as={BsHouseFill} />
                Dashboard
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/costumers" passHref>
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
