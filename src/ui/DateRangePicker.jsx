import { ConfigProvider, DatePicker, Space } from "antd";
import React, { useState } from "react";
import StyledButton from "./StyledButton";
import { Stack } from "@mui/material";

const { RangePicker } = DatePicker;

const DateRangePicker = () => {
  const [dates, setDates] = useState([]);
  const [dateStrings, setDateStrings] = useState([]);

  const handleDateChange = (dates, dateStrings) => {
    setDates(dates);
    setDateStrings(dateStrings);
  };

  const handleApplyClick = () => {
    console.log("Selected Dates: ", dates);
    console.log("Selected Date Strings: ", dateStrings);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    console.log("Cancel button clicked");
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              colorPrimary: "#F04D23",
            },
          },
        }}
      >
        <Space direction="vertical" size={12}>
          <RangePicker
            onChange={handleDateChange}
            renderExtraFooter={() => (
              <div
                style={{
                  margin: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "95%",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  width={"45%"}
                  height={"44px"}
                >
                  <StyledButton
                    variant="white"
                    name="Cancel"
                    onClick={handleCancelClick}
                    type="button"
                  />
                  <StyledButton
                    variant="primary"
                    type="button"
                    name="Apply"
                    onClick={handleApplyClick}
                  />
                </Stack>
              </div>
            )}
          />
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default DateRangePicker;
