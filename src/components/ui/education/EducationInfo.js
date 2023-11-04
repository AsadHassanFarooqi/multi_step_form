import React from "react";
import PropTypes from "prop-types";

import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "lums", label: "LUMS" },
  { value: "nust", label: "NUST" },
  { value: "uet", label: "UET" },
  { value: "fast", label: "FAST" },
];

const EducationInfo = ({ handleNextStep, handlePrevStep, values }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleNextStep(data);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 49,
      minHeight: 49,
      border: "1px solid #ccc",
      color: "#2C3E50",
      borderRadius: 5,
    }),
  };

  return (
    <div className="container">
      <h1 className="title">Education Info</h1>
      <div className="wrapper">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Degree Name"
              {...register("degreeName", {
                required: "degree name is required...",
              })}
              defaultValue={values.degreeName}
              className={errors.degreeName && "input-error"}
            />
            {errors.degreeName && (
              <p className="error">{errors.degreeName?.message}</p>
            )}
          </div>
          <div className="form-group">
            <Controller
              control={control}
              name="universityName"
              render={({ value, ref }) => (
                <Select
                  inputRef={ref}
                  options={options}
                  value={options.find((c) => c.value === values.universityName)}
                  onChange={(val) => setValue("universityName", val.value)}
                  styles={customStyles}
                />
              )}
            />
            {errors.universityName && (
              <p className="error">{errors.universityName?.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="University End date"
              {...register("endDate", {
                required: "degree end date is required...",
              })}
              defaultValue={values?.endDate}
              className={errors.endDate && "input-error"}
            />
            {errors.endDate && (
              <p className="error">{errors.endDate?.message}</p>
            )}
          </div>
          <button
            onClick={handlePrevStep}
            type="button"
            className="previous-button"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="submit-button"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

EducationInfo.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default EducationInfo;
