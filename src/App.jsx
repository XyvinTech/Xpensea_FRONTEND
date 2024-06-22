import { useState } from "react";
import "./index.css";
import StyledButton from "./ui/StyledButton";
import StyledCheckbox from "./ui/StyledCheckbox";
import StyledSwitch from "./ui/StyledSwitch";
import StyledRadioButton from "./ui/StyledRadioButton";
import StyledSpan from "./ui/StyledSpan";
import AddIcon from "@mui/icons-material/Add";
import StyledInput from "./ui/StyledInput";
import StyledSelectField from "./ui/StyledSelectField";
import StyledTextField from "./ui/StyledTextField";
import StyledSlider from "./ui/StyledSlider";
import StyledTable from "./ui/StyledTable";
import { userColumns, userData } from "./assets/json/TableData";
import StyledSearchbar from "./ui/StyledSearchbar";


export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([50, 80]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };

  return (
    <div>

      <StyledButton variant="primary" name="Sign in" />
      <StyledButton variant="secondary" name="Cancel" />
      <StyledButton
        variant="green"
        name={
          <>
            <AddIcon /> Approve
          </>
        }
      />
      <StyledButton variant="danger" name="Reject" />
      <br />
      <br />
      <StyledButton variant="gray" name="Cancel" />
      <StyledButton variant="white" name="Back" />
      <StyledCheckbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        disabled={false}
      />
      <StyledCheckbox
        variant="primary"
        checked={isChecked}
        onChange={handleCheckboxChange}
        disabled={false}
      />
      <br></br>
      <StyledSwitch
        variant={"primary"}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <StyledSwitch checked={isChecked} onChange={handleSwitchChange} />
      <StyledRadioButton />
      <StyledSpan variant={"green"} text={"Approved"} />
      <StyledSpan variant={"red"} text={"Rejected"} />
      <StyledSpan variant={"yellow"} text={"Pending"} />
      <StyledSpan variant={"blue"} text={"Edit"} />
      <StyledSpan
        variant={"darkRed"}
        text={
          <>
            <AddIcon /> Add
          </>
        }
      />
      <StyledInput placeholder={"Phone Number"} />
      <StyledSelectField placeholder={"Designation"} options={options} />
      <br></br>
      <StyledTextField label={"Names"} />
      <StyledSlider value={sliderValue} onChange={handleSliderChange} />
      <StyledTable columns={userColumns} data={userData} onSelectionChange={handleSelectionChange} />
      <StyledSearchbar/>
    </div>
  );
}
