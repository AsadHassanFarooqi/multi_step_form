import React from "react";

import { useForm } from "react-hook-form";

const EducationInfo = ({ handleNext, handlePrev, values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleNext(data);
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
            <input
              type="text"
              placeholder="Unviversity Name"
              {...register("universityName", {
                required: "university name is required...",
              })}
              defaultValue={values.universityName}
              className={errors.universityName && "input-error"}
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
            {errors.endDate && <p className="error">{errors.endDate?.message}</p>}
          </div>
          <button
            onClick={handlePrev}
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

export default EducationInfo;
