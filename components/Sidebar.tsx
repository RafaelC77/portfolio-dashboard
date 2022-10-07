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
import { useContext, useEffect } from "react";
import { AuthContext } from "../src/contexts/AuthContext";
import { parseCookies } from "nookies";

export function Sidebar() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const cookies = parseCookies();

    const userData = JSON.parse(cookies["dashboard.user"]);

    console.log(userData);

    if (userData) {
      setUser(userData);
    }
  }, []);

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
          name={user?.name}
          src={user?.image}
        />
        <Text fontWeight="bold" mt={2} display={{ base: "none", md: "block" }}>
          {user?.name}
        </Text>
        <Text
          fontSize="small"
          color="gray.500"
          display={{ base: "none", md: "block" }}
        >
          {user?.email}
        </Text>
      </Flex>

      <nav>
        <List spacing={{ base: 3, md: 6 }}>
          <ListItem fontSize={18} _hover={{ color: "green.400" }}>
            <NextLink href="/dashboard" passHref>
              <Link style={{ textDecoration: "none" }}>
                <ListIcon as={BsHouseFill} title="Dashboard" />
                <Text fontSize={16} display={{ base: "none", md: "inline" }}>
                  Dashboard
                </Text>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem fontSize={18} _hover={{ color: "green.400" }}>
            <NextLink href="/customers" passHref>
              <Link style={{ textDecoration: "none" }}>
                <ListIcon as={BsPeopleFill} title="Customers" />
                <Text fontSize={16} display={{ base: "none", md: "inline" }}>
                  Customers
                </Text>
              </Link>
            </NextLink>
          </ListItem>
          <ListItem fontSize={18} _hover={{ color: "green.400" }}>
            <NextLink href="/" passHref>
              <Link style={{ textDecoration: "none" }}>
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
