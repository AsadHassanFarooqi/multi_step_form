import React, { useState } from "react";
import BasicInfo from "../ui/basic-info/BasicInfo";
import EducationInfo from "../ui/education/EducationInfo";
import ExperienceInfo from "../ui/experience/ExperienceInfo";
import Success from "../ui/success/Success";

const UserDetailsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    degreeName: "",
    universityName: "",
    endDate: "",
    companyName: "",
    designation: "",
    salary: "",
  });

  const handleNextStep = (newData) => {
    setCurrentStep(currentStep + 1);
    setData({ ...data, ...newData });
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 1:
      return <BasicInfo handleNextStep={handleNextStep} values={data} />;
    case 2:
      return (
        <EducationInfo
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          values={data}
        />
      );
    case 3:
      return (
        <ExperienceInfo
          handlePrevStep={handlePrevStep}
          values={data}
          handleNextStep={handleNextStep}
        />
      );
    case 4:
      return <Success values={data} />;
    default:
      return <h1>Wrong page</h1>;
  }
};

export default UserDetailsForm;
