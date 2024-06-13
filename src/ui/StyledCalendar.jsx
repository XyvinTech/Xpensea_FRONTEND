import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

const StyledCalendar = () => {
  const [value, setValue] = React.useState([
    dayjs('2022-04-17'),
    dayjs('2022-04-21'),
  ]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer  components={['DateRangeCalendar', 'DateRangeCalendar']}>
          <DemoItem  label="Controlled calendar" >
            <DateRangeCalendar 
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      
    </div>
  );
};

export default StyledCalendar;
