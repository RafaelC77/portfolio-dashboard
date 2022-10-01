import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Sidebar } from "./components/Sidebar";

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
      <Flex w="90%" h="90%" bg="gray.50" borderRadius={36}>
        <Sidebar />

        <Flex as="main" w="100%" h="100%" bg="gray.200" p={8} borderRadius={36}>
          <SimpleGrid
            flex={1}
            gap={4}
            minChildWidth={320}
            alignItems="flex-start"
          >
            <Box p={8} bg="gray.700" borderRadius={24} pb={4}>
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

            <Box p={8} bg="gray.700" borderRadius={24} pb={4}>
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
