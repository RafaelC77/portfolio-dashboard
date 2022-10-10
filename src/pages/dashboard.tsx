import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import dynamic from "next/dynamic";

import { Sidebar } from "../../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-10-01T00:00:00.000Z",
      "2022-09-30T00:00:00.000Z",
      "2022-09-29T00:00:00.000Z",
      "2022-09-28T00:00:00.000Z",
      "2022-09-27T00:00:00.000Z",
      "2022-09-26T00:00:00.000Z",
      "2022-09-25T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "lastWeek", data: [10, 34, 34, 23, 56, 65, 78] }];

export default function Dashboard() {
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
          p={{ base: 4, md: 8 }}
          borderRadius={36}
        >
          <SimpleGrid
            flex={1}
            gap={4}
            minChildWidth={{ base: 240, sm: 320 }}
            alignItems="flex-start"
          >
            <Box p={{ base: 4, md: 8 }} bg="gray.700" borderRadius={24} pb={4}>
              <Text color="gray.100" fontSize="large">
                Vendas
              </Text>

              <Chart
                type="area"
                series={series}
                height={200}
                options={options}
              />
            </Box>

            <Box p={{ base: 4, md: 8 }} bg="gray.700" borderRadius={24} pb={4}>
              <Text color="gray.100" fontSize="large">
                Faturamento
              </Text>

              <Chart
                type="area"
                series={series}
                height={200}
                options={options}
              />
            </Box>
          </SimpleGrid>
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
