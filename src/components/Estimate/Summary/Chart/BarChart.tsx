import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BarChart() {
  const series = [
    {
      name: "price",
      data: [330000, 300000, 450000, 300000, 300000, 600000, 550000],
    },
  ];
  const option = {
    colors: ["#ED5656"],

    plotOptions: {
      bar: {
        columnWidth: "70%",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
      style: {
        fontFamily: "Inter, sans-serif",
      },
      zoom: {
        enabled: false,
      },
      offsetX: -10,
      offsetY: 0,
    },
    xaxis: {
      tickPlacement: "between",
      categories: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      labels: {
        show: true,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: ["#112D4E"],
          fontSize: "13px",
          fontFamily: "Inter , sans-serif",
          fontWeight: 300,
        },
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        show: true,
        rotateAlways: false,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        formatter: function (value: number) {
          return value / 1000 + "K";
        },
        style: {
          colors: ["#112D4E"],
          fontSize: "13px",
          fontFamily: "Inter , sans-serif",
          fontWeight: 300,
          cssClass: "apexcharts-xaxis-label",
        },
        offsetX: -3,
        offsetY: -2,
      },
    },

    grid: {
      show: true,
      borderColor: "#FFFFFF",

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
  return (
    <div className="flex justify-center w-full">
      <ApexChart
        type="bar"
        options={option}
        series={series}
        height={140}
        width="100%"
      />
    </div>
  );
}
