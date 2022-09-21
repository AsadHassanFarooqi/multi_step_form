import React from "react";
import './success.css';

const Success = ({ values }) => {
  return (
    <div className="container">
      <h1 className="title">Success</h1>
      <h4 className="subtitle">Thank you for submitting your data.</h4>
      <table>
        <tbody>
          {Object.keys(values).map((key, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{values[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Success;
