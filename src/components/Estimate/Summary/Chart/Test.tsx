"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function ExampleChart() {
  const option = {
    colors: ["#ED5656"],
    stroke: {
      show: true,
      width: 3,
      dashArray: 0,
    },
    chart: {
      toolbar: {
        show: false,
      },
      fontFamily: "Helvetica, Arial, sans-serif",
      id: "apexchart-example",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ["JUN", "JUL", "AUG", "SEP", "OCT"],
    },
    yaxis: {
      axisTicks: {
        show: false,
        tickAmount: 3,
      },
    },

    grid: {
      show: true,
      borderColor: "#FFFFFF",
      strokeDashArray: 0,

      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },
  };

  const series = [
    {
      name: "price",
      data: [330000, 300000, 300000, 300000, 300000],
    },
  ];

  return (
    <div className="">
      <ApexChart
        type="line"
        options={option}
        series={series}
        height={180}
        width={300}
      />
    </div>
  );
}
