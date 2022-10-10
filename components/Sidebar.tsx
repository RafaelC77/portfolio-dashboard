import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BsHouseFill,
  BsPeopleFill,
  BsBox,
  BsBoxArrowLeft,
} from "react-icons/bs";
import { useContext, useEffect } from "react";
import { parseCookies } from "nookies";
import NextLink from "next/link";

import jwtDecode from "jwt-decode";
import { AuthContext } from "../src/contexts/AuthContext";

export function Sidebar() {
  const { user, setUser, signOut } = useContext(AuthContext);

  useEffect(() => {
    const { "dashboard.token": token } = parseCookies();

    const { firstName, lastName, email, image } = jwtDecode<{
      firstName: string;
      lastName: string;
      email: string;
      image: string;
    }>(token);

    const userData = {
      name: firstName.concat(" ", lastName),
      email,
      image,
    };

    setUser(userData);
  }, []);

  return (
    <Flex
      flexDir={{ base: "row", md: "column" }}
      h={{ base: "auto", md: "100%" }}
      w={{ base: "100%", md: "240px" }}
      align="center"
      justify={{ base: "space-between", md: "unset" }}
      py={{ base: 5, md: 10 }}
      px={{ base: "1rem", md: 0 }}
    >
      <Heading fontSize={{ base: 16, md: 30 }} mb={{ base: 0, md: 20 }}>
        Dash
      </Heading>

      <Flex direction="column" align="center" mb={{ base: 0, md: 20 }}>
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

      <Stack
        direction={{ base: "row", md: "column" }}
        spacing={{ base: "1rem", md: "3rem" }}
      >
        <Box>
          <NextLink href="/dashboard" passHref>
            <Link style={{ textDecoration: "none" }}>
              <Icon as={BsHouseFill} title="Dashboard" />
              <Text
                fontSize={16}
                display={{ base: "none", md: "inline" }}
                ml="0.5rem"
              >
                Dashboard
              </Text>
            </Link>
          </NextLink>
        </Box>

        <Box>
          <NextLink href="/customers" passHref>
            <Link style={{ textDecoration: "none" }}>
              <Icon as={BsPeopleFill} title="Customers" />
              <Text
                fontSize={16}
                display={{ base: "none", md: "inline" }}
                ml="0.5rem"
              >
                Customers
              </Text>
            </Link>
          </NextLink>
        </Box>

        <Box>
          <NextLink href="/products" passHref>
            <Link style={{ textDecoration: "none" }}>
              <Icon as={BsBox} title="Products" />
              <Text
                fontSize={16}
                display={{ base: "none", md: "inline" }}
                ml="0.5rem"
              >
                Products
              </Text>
            </Link>
          </NextLink>
        </Box>
      </Stack>

      <Button
        onClick={signOut}
        leftIcon={<BsBoxArrowLeft />}
        mt={{ base: 0, md: "auto" }}
        px={{ base: "0.5rem", md: "1rem" }}
        title="Sign out"
        _hover={{ bg: "green.400" }}
      >
        <Text display={{ base: "none", md: "inline" }}>Sign out</Text>
      </Button>
    </Flex>
  );
}
