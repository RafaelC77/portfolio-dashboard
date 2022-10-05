import {
  Flex,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useCostumers } from "../../services/hooks/useCostumers";

export default function Costumers() {
  const [page, setpage] = useState(1);
  const { data, isLoading, isFetching, error } = useCostumers(page);

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
            {!isLoading && isFetching && <Spinner size="sm" ml={4} />}
          </Heading>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao carregar clientes!</Text>
            </Flex>
          ) : (
            <>
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
                  {data?.costumers.map((costumer) => {
                    return (
                      <Tr key={costumer.id}>
                        <Td>{costumer.name}</Td>
                        <Td>{costumer.email}</Td>
                        <Td>{costumer.date}</Td>
                        <Td>{costumer.amount}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountRegisters={data.totalCount}
                onPageChange={setpage}
                currentPage={page}
              />
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
