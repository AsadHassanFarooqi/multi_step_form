import React, { useState } from "react";
import BasicInfo from "../ui/basic-info/BasicInfo";
import EducationInfo from "../ui/education/EducationInfo";
import ExperienceInfo from "../ui/experience/ExperienceInfo";
import Success from "../ui/success/Success";

const UserDetails = () => {
  const [count, setCount] = useState(1);
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

  const handleNext = (newData) => {
    setCount(count + 1);
    setData({ ...data, ...newData });
  };

  const handlePrev = () => {
    setCount(count - 1);
  };

  switch (count) {
    case 1:
      return (
        <BasicInfo
          handleNext={handleNext}
          values={data}
          hasGender={data?.gender}
        />
      );
    case 2:
      return (
        <EducationInfo
          handlePrev={handlePrev}
          handleNext={handleNext}
          values={data}
        />
      );
    case 3:
      return (
        <ExperienceInfo
          handlePrev={handlePrev}
          values={data}
          handleNext={handleNext}
        />
      );
    case 4:
      return <Success values={data} />;
    default:
      return <h1>Wrong page</h1>;
  }
};

export default UserDetails;
