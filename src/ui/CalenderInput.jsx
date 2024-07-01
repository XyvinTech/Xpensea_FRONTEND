import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import StyledInput from './StyledInput';
import { CalenderIcon } from '../assets/icons/CalenderIcon';

const convertDateFormat = (inputDate) => {
  const parts = inputDate.split('-');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are zero-based
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
};

const CalendarInput = ({ dateValue, onDateChange,placeholder }) => {
  const calDate = dateValue ? convertDateFormat(dateValue) : new Date();
  const [selectedDate, setSelectedDate] = useState(calDate);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  useEffect(() => {
    if (dateValue) {
      const newDate = convertDateFormat(dateValue);
      setSelectedDate(newDate);
    }
  }, [dateValue]);

  const handleCalendarClick = () => {
    setDatePickerOpen(!isDatePickerOpen);
  };

  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      const formattedDate = format(date,'yyyy-MM-dd');
      if (onDateChange) {
        onDateChange(formattedDate);
      }
      setSelectedDate(date);
      setDatePickerOpen(false);
    } else {
      console.error('Invalid date object:', date);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <StyledInput
        placeholder={placeholder}
        endIcon={<CalenderIcon onClick={handleCalendarClick} />}
        value={dateValue || ''}
        readOnly
      />
      {isDatePickerOpen && (
        <div style={{ position: 'absolute', zIndex: 2, right: 0 }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            popperPlacement="bottom-end"
            open
            onClickOutside={() => setDatePickerOpen(false)}
            customInput={<StyledInput value={''}/>}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarInput;