import React from "react";

import { useForm } from "react-hook-form";

const BasicInfo = ({ handleNext, values }) => {
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
      <h1 className="title">Basic Info</h1>
      <div className="wrapper">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "first name is required...",
              })}
              defaultValue={values.firstName}
              className={errors.mobileNumber && "input-error"}
            />
            {errors.firstName && (
              <p className="error">{errors.firstName?.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "last name is required...",
              })}
              defaultValue={values.lastName}
              className={errors.lastName && "input-error"}
            />
            {errors.lastName && (
              <p className="error">{errors.lastName?.message}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email address is required...",
                pattern: /^\S+@\S+$/i,
              })}
              defaultValue={values?.email}
              className={errors.mobileNumber && "input-error"}
            />
            {errors.email && <p className="error">{errors.email?.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Mobile number"
              {...register("mobileNumber", {
                required: "max  length is 11..",
                maxLength: 11,
              })}
              defaultValue={values.mobileNumber}
              className={errors.mobileNumber && "input-error"}
            />
            {errors.mobileNumber && (
              <p className="error">{errors.mobileNumber?.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="male">
              <input
                {...register("gender", { required: "please select gender..." })}
                type="radio"
                value="Male"
                id="male"
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                {...register("gender", { required: "please select gender..." })}
                type="radio"
                value="Female"
                id="female"
              />
              Female
            </label>
            {errors.gender && <p className="error">{errors.gender?.message}</p>}
          </div>
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

export default BasicInfo;
