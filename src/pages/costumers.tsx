import {
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function Costumers() {
  useEffect(() => {
    fetch("http://localhost:3000/api/costumers")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        w={{ base: "100%", md: "90%" }}
        h={{ base: "100%", md: "90%" }}
        bg="gray.50"
        borderRadius={{ base: 0, md: 36 }}
      >
        <Sidebar />

        <Flex
          as="main"
          w="100%"
          h="100%"
          bg="gray.200"
          p={{ base: 4, md: 12 }}
          borderRadius={36}
          direction="column"
          overflow={{ base: "scroll", lg: "unset" }}
        >
          <Heading
            fontSize={{ base: "md", md: "2xl" }}
            mb={12}
            mt={{ base: 6, md: 0 }}
          >
            Clientes
          </Heading>

          <Table colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Data</Th>
                <Th>Valor</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>Rafael</Td>
                <Td>rcarvalhobsb@gmail.com</Td>
                <Td>01/10/2022</Td>
                <Td>R$ 99,99</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Flex>
      </Flex>
    </Flex>
  );
}
