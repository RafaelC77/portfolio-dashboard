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
    foreColor: theme.colors.gray[500],
  },
  colors: [theme.colors.green[500]],
  grid: {
    show: true,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  markers: {
    size: 3,
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

const series = [{ name: "2022", data: [10, 34, 34, 23, 56, 65, 78] }];

export function SalesChart() {
  return <Chart type="area" series={series} height={180} options={options} />;
}
