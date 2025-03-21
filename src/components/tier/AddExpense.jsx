import React, { useState, useEffect } from "react";
import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import StyledInput from "../../ui/StyledInput";
import { CrossIcon } from "../../assets/icons/CrossIcon";
import StyledSwitch from "../../ui/StyledSwitch";
import { Controller, useForm } from "react-hook-form";
import CalendarInput from "../../ui/CalenderInput";
import { useTierStore } from "../../store/tierStore";
import StyledSelectField from "../../ui/StyledSelectField";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { toast } from "react-toastify";

const AddExpense = ({ open, onClose, onChange, isUpdate = false }) => {
  const { addTiers, tier, updateTiers } = useTierStore();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      activationDate: "",
      tierTitle: "",
      level: "",
      categories: [],
    },
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isUpdate && tier) {
      setCategories(tier?.categories || []);
      reset({
        activationDate: tier?.activationDate,
        tierTitle: tier?.title,
        level: tier?.level,
        categories: tier?.categories,
      });
    } else {
      reset({
        activationDate: "",
        tierTitle: "",
        level: "",
      });
      setCategories([]);
    }
  }, [isUpdate, tier, reset]);

  const handleClear = (event) => {
    event.preventDefault();
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
      title: values.title.value || "",
      maxAmount: values.maxAmount || "",
      status: true,
    };
    setCategories([...categories, newCategory]);
    setValue("title", "");
    setValue("maxAmount", "");
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
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
        level: data.level,
      };

      if (isUpdate) {
        await updateTiers(tier._id, formData);
      } else {
        await addTiers(formData);
      }
      onClose();
      onChange();

      reset({
        activationDate: "",
        tierTitle: "",
        categories: [],
      });
      setCategories([]);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchChange = (index) => (e) => {
    const updatedCategories = [...categories];
    updatedCategories[index].status = e.target.checked;
    setCategories(updatedCategories);
  };
  const Title = [
    { value: "Shopping", label: "Shopping" },
    { value: "Travel", label: "Travel" },
    { value: "Miscellaneous", label: "Miscellaneous" },
    { value: "Stay&Leisure", label: "Stay&Leisure" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "Food", label: "Food" },
  ];
  const handleDelete = (index) => () => {
    const updatedCategories = categories.filter((category, i) => {
      return i !== index;
    });
    setCategories(updatedCategories);
  };
  // console.log('updatedCategor',isUpdate)
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box padding={3}>
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
              onClick={(event) => handleClear(event)}
            >
              <CrossIcon />
            </Box>
          </Box>
          <Grid container spacing={2} padding={2}>
            <Grid item md="12">
              <Controller
                name="tierTitle"
                control={control}
                rules={{ required: "Title is required" }}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      placeholder={"Tier Title"}
                      sx={{ flex: 1 }}
                    />
                    {errors.tierTitle && (
                      <span style={{ color: "red" }}>
                        {errors.tierTitle.message}
                      </span>
                    )}{" "}
                  </>
                )}
              />{" "}
            </Grid>{" "}
            <Grid item md="6">
              <Controller
                name="level"
                control={control}
                rules={{ required: "Level is required" }}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      placeholder={"Level"}
                      sx={{ flex: 1 }}
                    />
                    {errors.level && (
                      <span style={{ color: "red" }}>
                        {errors.level.message}
                      </span>
                    )}{" "}
                  </>
                )}
              />{" "}
            </Grid>
            <Grid item md="6">
              <Controller
                name="activationDate"
                control={control}
                rules={{ required: "Activation Date is required" }}
                render={({ field }) => (
                  <>
                    <CalendarInput
                      {...field}
                      placeholder={"Activation Date"}
                      dateValue={field.value}
                      onDateChange={field.onChange}
                    />
                    {errors.activationDate && (
                      <span style={{ color: "red" }}>
                        {errors.activationDate.message}
                      </span>
                    )}
                  </>
                )}
              />
            </Grid>
            {categories.map((item, index) => (
              <Grid
                container
                key={index}
                spacing={4}
                padding={2}
                alignItems="center"
                justifyContent={"center"}
              >
                <Grid item xs={12} md={6}>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"space-between"}
                  >
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
                <Grid item xs={12} md={5} spacing={2}>
                  <StyledInput
                    value={item?.maxAmount}
                    placeholder={"Max Amount"}
                  />
                </Grid>
                <Grid item xs={12} md={1} spacing={2} textAlign={"end"}>
                  <Box sx={{ cursor: "pointer" }} onClick={handleDelete(index)}>
                    <DeleteIcon />
                  </Box>
                </Grid>
              </Grid>
            ))}{" "}
            <>
              <Grid item md="6" minHeight={"300px"}>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <StyledSelectField
                      {...field}
                      placeholder={"Choose Category"}
                      options={Title}
                      sx={{ flex: 1 }}
                    />
                  )}
                />{" "}
              </Grid>{" "}
              <Grid item md="6">
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
              </Grid>
            </>
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
                  name={loading ? "Loading..." : "Submit"}
                  disabled={loading}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Dialog>
  );
};

export default AddExpense;
