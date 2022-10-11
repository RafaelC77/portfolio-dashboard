import {
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  theme,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

import { Sidebar } from "../../components/Sidebar";
import { SalesChart } from "../../components/Charts/SalesChart";
import { IncomeChart } from "../../components/Charts/IncomeChart";

export default function Dashboard() {
  return (
    <Flex
      w="100vw"
      h={{ base: "100%", md: "100vh" }}
      justify="center"
      align="center"
      p={{ base: 0, md: 8 }}
    >
      <Flex
        w="100%"
        h="100%"
        maxWidth={1240}
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
          p={{ base: 4, md: 8 }}
          borderRadius={36}
          align="flex-start"
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
            flex={1}
            gap={{ base: 4, lg: 8 }}
            alignItems="flex-start"
          >
            <GridItem
              p={{ base: 4, md: 6 }}
              bg="gray.700"
              borderRadius={24}
              pb={4}
            >
              <Text color="gray.100" fontSize="large">
                Vendas
              </Text>

              <SalesChart />
            </GridItem>

            <GridItem
              p={{ base: 4, md: 6 }}
              bg="gray.300"
              borderRadius={24}
              pb={4}
            >
              <Flex gap={2} align="center">
                <Text color="gray.900" fontSize="large">
                  Faturamento
                </Text>

                <Text color="gray.600" fontSize="sm">
                  {"(em milhares de reais)"}
                </Text>
              </Flex>

              <IncomeChart />
            </GridItem>

            <GridItem
              p={{ base: 4, md: 8 }}
              bg="gray.800"
              borderRadius={24}
              colSpan={{ base: 1, lg: 2 }}
            >
              <SimpleGrid minChildWidth={190} spacing="1.5rem">
                <Box>
                  <Stat textAlign="center" color={theme.colors.gray[100]}>
                    <StatLabel>Pedidos Realizados</StatLabel>
                    <StatHelpText>jan/22 - jul/22</StatHelpText>
                    <StatNumber>1,654</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      25,46%
                    </StatHelpText>
                  </Stat>
                </Box>

                <Box>
                  <Stat textAlign="center" color={theme.colors.gray[100]}>
                    <StatLabel>Total de Vendas</StatLabel>
                    <StatHelpText>jan/22 - jul/22</StatHelpText>
                    <StatNumber>R$ 458.321,00</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      13,79%
                    </StatHelpText>
                  </Stat>
                </Box>

                <Box>
                  <Stat textAlign="center" color={theme.colors.gray[100]}>
                    <StatLabel>Ticket Médio</StatLabel>
                    <StatHelpText>jan/22 - jul/22</StatHelpText>
                    <StatNumber>R$ 277,09</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      7,26%
                    </StatHelpText>
                  </Stat>
                </Box>

                <Box>
                  <Stat textAlign="center" color={theme.colors.gray[100]}>
                    <StatLabel>Porcentagem de Lucro</StatLabel>
                    <StatHelpText>jan/22 - jul/22</StatHelpText>
                    <StatNumber>18,46%</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      23,14%
                    </StatHelpText>
                  </Stat>
                </Box>
              </SimpleGrid>
            </GridItem>
          </Grid>
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
