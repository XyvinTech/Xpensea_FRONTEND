import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { FilterIcon } from "../assets/icons/FilterIcon";
import StyledFilter from "./StyledFilter";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
);

const labels = ["January", "February", "March", "April", "May"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Aalapuzha",
      data: [1000, 3000, 6000, 4000, 5000],
      fill: false,
      borderColor: "#165BAA",
      backgroundColor: "#165BAA",
      borderJoinStyle: "bevel",
      pointBackgroundColor: "#165BAA",
    },
    {
      label: "Ernamkulam",
      data: [4000, 5000, 3000, 2000, 3000],
      fill: true,
      borderColor: "#A155B9",
      backgroundColor: "#A155B9",
      borderJoinStyle: "bevel",
      pointBackgroundColor: "#A155B9",
    },
    {
      label: "Kochi",
      data: [3000, 2000, 2000, 1000, 2000],
      fill: false,
      borderColor: "#F765A3",
      tension: 0.1,
      backgroundColor: "#F765A3",
      borderJoinStyle: "bevel",
      pointBackgroundColor: "#F765A3",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 1000,
      },
      min: 0,
      max: 6000,
    },
  },
};

const StyledChart = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: "white",borderRadius:"8px"}}>
      <Stack
        direction="row"
        justifyContent="space-between"
        padding={2}
        alignItems="center"
       
      >
        <Stack direction="column" paddingTop={2}>
          <Typography variant="h9" color={"#828282"}>
            Total Expense
          </Typography>
          <Typography variant="h10" color="#0B1354" fontWeight="bold">
            5.987,37
          </Typography>
        </Stack>
        <Stack direction="row">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={"44px"}
            height={"44px"}
            borderRadius={"7px"}
            boxShadow={
              "0 -4px 6px -1px rgba(0, 0, 0, 0.01), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)"
            }
            onClick={handleOpenFilter}
          >
            <FilterIcon />
          </Box>
        </Stack>
      </Stack>
      <Divider />
      <Box padding={2} height="370px">
        <Line data={data} options={options} />
      </Box>
      <StyledFilter open={filterOpen} onClose={handleCloseFilter} />
    </Box>
  );
};

export default StyledChart;
