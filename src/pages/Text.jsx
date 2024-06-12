import React, { useState } from 'react'
import { userColumns, userData } from "../assets/json/TableData";
import StyledTable from '../ui/StyledTable';
const Text = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const handleSelectionChange = (newSelectedIds) => {
        setSelectedRows(newSelectedIds);
        console.log("Selected items:", newSelectedIds);
      };
    
  return (
    <StyledTable columns={userColumns} data={userData} onSelectionChange={handleSelectionChange} />
  )
}

export default Text
