import { theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

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
    foreColor: theme.colors.gray[900],
  },
  colors: [theme.colors.green[500]],
  grid: {
    show: true,
    borderColor: theme.colors.gray[100],
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "category",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
  },
};

const series = [{ name: "2022", data: [94, 82, 24, 79, 128, 65, 36] }];

export function IncomeChart() {
  return <Chart type="bar" series={series} height={180} options={options} />;
}
