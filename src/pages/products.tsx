import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useProducts } from "../../services/hooks/useProducts";

export default function Products() {
  const [page, setpage] = useState(1);
  const [query, setQuery] = useState("");
  const { data, isLoading, isFetching, error } = useProducts(page, query);
  const { register, handleSubmit } = useForm();

  type SearchInput = {
    search: string;
  };

  function handleSearch(data: SearchInput) {
    setQuery(data.search);
  }

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        w={{ base: "100%", md: "90%" }}
        h={{ base: "100%", md: "90%" }}
        bg="gray.50"
        borderRadius={{ base: 0, md: 36 }}
        direction={{ base: "column", md: "row" }}
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
          <Flex
            as="header"
            mb={12}
            mt={{ base: 6, md: 0 }}
            align="center"
            justify="space-between"
          >
            <Heading fontSize={{ base: "md", md: "2xl" }}>
              Produtos
              {!isLoading && isFetching && <Spinner size="sm" ml={4} />}
            </Heading>

            <FormControl
              as="form"
              w={{ base: "50%", md: "40%" }}
              onSubmit={handleSubmit(handleSearch)}
              display="flex"
              alignItems="center"
              gap="0.5rem"
            >
              <FormLabel display="none">Buscar produto</FormLabel>
              <Input
                type="text"
                variant="flushed"
                placeholder="Buscar produto"
                focusBorderColor="gray.400"
                {...register("search")}
              />
              <Button
                type="submit"
                bg="green.500"
                size="sm"
                _hover={{ bg: "green.400" }}
              >
                <BsSearch color="gray.900" />
              </Button>
            </FormControl>
          </Flex>

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
              <Table
                colorScheme="blackAlpha"
                overflow="scroll"
                size={{ base: "sm", md: "md" }}
              >
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Nome</Th>
                    <Th>Estoque</Th>
                    <Th>Valor</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data.products.map((product) => {
                    return (
                      <Tr key={product.id}>
                        <Td>
                          <Box
                            borderRadius="md"
                            overflow="hidden"
                            w="3.75rem"
                            h="3.75rem"
                            cursor="pointer"
                          >
                            <Image
                              src={product.images[0]}
                              width={60}
                              height={60}
                            />
                          </Box>
                        </Td>
                        <Td>{product.name}</Td>
                        <Td>{product.stock}</Td>
                        <Td>{product.price}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination
                totalCountRegisters={data?.totalCount}
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

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { "dashboard.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
