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
    <Flex
      flexDir="column"
      h="100%"
      w={{ base: "80px", md: "240px" }}
      align="center"
      py={10}
    >
      <Heading fontSize={{ base: 16, md: 30 }} mb={{ base: 10, md: 20 }}>
        Dash
      </Heading>

      <Flex direction="column" align="center" mb={{ base: 10, md: 20 }}>
        <Avatar
          size={{ base: "md", md: "xl" }}
          name="Rafael Carvalho"
          src="https://github.com/rafaelc77.png"
        />
        <Text fontWeight="bold" mt={2} display={{ base: "none", md: "block" }}>
          Rafael Carvalho
        </Text>
        <Text
          fontSize="small"
          color="gray.500"
          display={{ base: "none", md: "block" }}
        >
          rcarvalhobsb@gmail.com
        </Text>
      </Flex>

      <nav>
        <List spacing={{ base: 3, md: 6 }}>
          <ListItem fontSize={18}>
            <NextLink href="/dashboard" passHref>
              <Link>
                <ListIcon as={BsHouseFill} title="Dashboard" />
                <Text fontSize={16} display={{ base: "none", md: "inline" }}>
                  Dashboard
                </Text>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem fontSize={18}>
            <NextLink href="/costumers" passHref>
              <Link>
                <ListIcon as={BsPeopleFill} title="Costumers" />
                <Text fontSize={16} display={{ base: "none", md: "inline" }}>
                  Costumers
                </Text>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem fontSize={18}>
            <NextLink href="/" passHref>
              <Link>
                <ListIcon as={BsBox} title="Products" />
                <Text fontSize={16} display={{ base: "none", md: "inline" }}>
                  Products
                </Text>
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </nav>
    </Flex>
  );
}
