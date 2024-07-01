import { ConfigProvider, DatePicker, Space } from 'antd'
import React from 'react'
const { RangePicker } = DatePicker;

const DateRangePicker = () => {


    
  return (
    <div>

<ConfigProvider
  theme={{
    components: {
      DatePicker: {
      
        colorPrimary: '#F04D23',
      },
    },
  }}
>
<Space direction="vertical" size={12}>
         <RangePicker   />
         </Space>
</ConfigProvider>

      
    </div>
  )
}

export default DateRangePicker
