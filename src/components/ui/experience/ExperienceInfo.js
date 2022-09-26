import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";

const ExperienceInfo = ({ handlePrevStep, handleNextStep, values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let text = `Click ok to submit
     cancel to cancel this operation`;
  if (window.confirm(text) === true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
    handleNextStep(data);
  };
  return (
    <div className="container">
      <h1 className="title">Experience Info</h1>
      <div className="wrapper">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName", {
                required: "company name is required...",
              })}
              defaultValue={values.companyName}
              className={errors.companyName && "input-error"}
            />
            {errors.companyName && (
              <p className="error">{errors.companyName?.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Designation"
              {...register("designation", {
                required: "designtaion is required...",
              })}
              defaultValue={values.designation}
              className={errors.designation && "input-error"}
            />
            {errors.designation && (
              <p className="error">{errors.designation?.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="enter your salary"
              {...register("salary", {
                required: "Salary is required...",
              })}
              defaultValue={values?.salary}
              className={errors.salary && "input-error"}
            />
            {errors.salary && <p className="error">{errors.salary?.message}</p>}
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

ExperienceInfo.propTypes  = {
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
}

export default ExperienceInfo;
