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
import { Pagination } from "./components/Pagination";
import { Sidebar } from "./components/Sidebar";

export default function Costumers() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex w="90%" h="90%" bg="gray.50" borderRadius={36}>
        <Sidebar />

        <Flex
          as="main"
          w="100%"
          h="100%"
          bg="gray.200"
          p={12}
          borderRadius={36}
          direction="column"
        >
          <Heading fontSize="2xl" mb={12}>
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
