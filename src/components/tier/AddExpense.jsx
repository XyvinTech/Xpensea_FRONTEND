import React, { useState, useEffect } from "react";
import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import StyledInput from "../../ui/StyledInput";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledSwitch from "../../ui/StyledSwitch";
import { Controller, useForm } from "react-hook-form";
import CalendarInput from "../../ui/CalenderInput";
import { useTierStore } from "../../store/tierStore";

const AddExpense = ({ open, onClose, onChange }) => {
  const { addTiers, updateChange, tier, updateTiers, isUpdate } =
    useTierStore();
  const { control, handleSubmit, reset, getValues, setValue } = useForm({
    defaultValues: {
      activationDate: isUpdate ? tier?.activationDate : "",
      tierTitle: isUpdate ? tier?.title : "",
      categories: isUpdate ? tier?.categories : [],
    },
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isUpdate && tier) {
      setCategories(tier?.categories || []);
      reset({
        activationDate: tier?.activationDate,
        tierTitle: tier?.title,
        categories: tier?.categories,
      });
    }
  }, [isUpdate, tier, reset]);

  const handleClear = () => {
    updateChange(isUpdate);
    setCategories([]);
    reset({
      activationDate: "",
      tierTitle: "",
      categories: [],
    });
    onClose();
  };

  const onAddExpense = () => {
    const values = getValues();
    const newCategory = {
      title: values.title || "",
      maxAmount: values.maxAmount || "",
      status: true,
    };
    setCategories([...categories, newCategory]);
    setValue("title", "");
    setValue("maxAmount", "");
  };

  const onSubmit = async (data) => {
    let totalMaxAmount = 0;
    categories?.forEach((item) => {
      if (item.status) {
        totalMaxAmount += parseFloat(item.maxAmount);
      }
    });

    const formData = {
      activationDate: data.activationDate,
      title: data.tierTitle,
      categories,
      totalAmount: totalMaxAmount,
    };

    if (isUpdate) {
      await updateTiers(tier._id, formData);
    } else {
      await addTiers(formData);
    }
    onClose();
    onChange();
    updateChange(isUpdate);
    reset({
      activationDate: "",
      tierTitle: "",
      categories: [],
    });
    setCategories([]);
  };

  const handleSwitchChange = (index) => (e) => {
    const updatedCategories = [...categories];
    updatedCategories[index].status = e.target.checked;
    setCategories(updatedCategories);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box padding={3}>
          <Stack spacing={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              position="relative"
            >
              <Box flexGrow={1} />
              <h2 style={{ flexGrow: 1 }}>Tier</h2>
              <Box
                position="absolute"
                right={0}
                sx={{ cursor: "pointer" }}
                onClick={handleClear}
              >
                <CrossIcon />
              </Box>
            </Box>

            <Stack direction="row" spacing={2}>
              <Controller
                name="tierTitle"
                control={control}
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    placeholder={"Tier Title"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
              <Controller
                name="activationDate"
                control={control}
                render={({ field }) => (
                  <CalendarInput
                    {...field}
                    placeholder={"Activation Date"}
                    dateValue={field.value}
                    onDateChange={field.onChange}
                  />
                )}
              />
            </Stack>
            {categories.map((item, index) => (
              <Grid container key={index} spacing={1}>
                <Grid item xs={12} md={6} padding={2}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="subtitle1" fontWeight={"500"}>
                      {item?.title}
                    </Typography>
                    <StyledSwitch
                      checked={item.status}
                      onChange={handleSwitchChange(index)}
                      variant="primary"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledInput
                    value={item?.maxAmount}
                    placeholder={"Max Amount"}
                    sx={{ flex: 1 }}
                  />
                </Grid>
              </Grid>
            ))}
            <Stack direction="row" spacing={2}>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    placeholder={"Event Expense"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
              <Controller
                name="maxAmount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledInput
                    {...field}
                    placeholder={"Max Amount"}
                    sx={{ flex: 1 }}
                  />
                )}
              />
            </Stack>

            <Grid container spacing={1}>
              <Grid item md={6} sm={6}></Grid>
              <Grid item md={6} sm={6}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <StyledButton
                    variant="white"
                    padding="15px 50px"
                    name="Add Expense"
                    onClick={(e) => {
                      e.preventDefault();
                      onAddExpense();
                    }}
                    type="button"
                  />
                  <StyledButton
                    variant="primary"
                    type="submit"
                    padding="15px 50px"
                    name="Save"
                  />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </form>
    </Dialog>
  );
};

export default AddExpense;
