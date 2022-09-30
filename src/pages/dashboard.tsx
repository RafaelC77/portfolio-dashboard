import { Flex, Heading } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar";

export default function Dashboard() {
  return (
    <Flex w="100vw" h="100vh">
      <Sidebar />

      <Flex
        as="main"
        w="100%"
        h="100%"
        bg="gray.200"
        p={8}
        borderLeftRadius={36}
      >
        <Heading>Hello world!</Heading>
      </Flex>
    </Flex>
  );
}
