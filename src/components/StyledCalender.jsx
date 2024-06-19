import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { DatePicker, Button } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

const { RangePicker } = DatePicker;



const StyledCalender = () => {
  const [dates, setDates] = useState([]);

  const handleApply = () => {
    console.log('Applied dates:', dates);
  };

  const handleCancel = () => {
    setDates([]);
  };

  return (
    <RangePicker
      value={dates.length > 0 ? [moment(dates[0], 'YYYY-DD-MM'), moment(dates[1], 'YYYY-DD-MM')] : []}
      format="YYYY-DD-MM"
      onChange={(values) => {
        if (values) {
          setDates(values.map(item => moment(item).format('YYYY-DD-MM')));
        } else {
          setDates([]);
        }
      }}
      renderExtraFooter={() => (
        <div style={{ textAlign: 'center' }}>
          {dates.length > 0 && (
            <div style={{ marginBottom: '8px' }}>
              <span style={{ marginRight: '8px' }}>Start Date:</span>
              {moment(dates[0], 'YYYY-DD-MM').format('YYYY-MM-DD')}
            </div>
          )}
          {dates.length > 1 && (
            <div>
              <span style={{ marginRight: '8px' }}>End Date:</span>
              {moment(dates[1], 'YYYY-DD-MM').format('YYYY-MM-DD')}
            </div>
          )}
          <Button type="primary" onClick={handleApply} style={{ margin: '8px' }}>
            Apply
          </Button>
          <Button onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      )}
    />
  );
};

export default StyledCalender;
