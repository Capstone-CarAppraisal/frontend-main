import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ data }: { data: any }) {
  return (
    <div className="chart-container">
      <Line
        data={data}
        className="font-sans"
        options={{
          elements: {
            point: {
              radius: 0, // Set the point radius to 0 to hide data points
            },
          },

          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                display: true,
              },
            },
            y: {
              grid: {
                display: true,
                color: "white",
              },
              ticks: {
                display: true,
              },
            },
          },
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
