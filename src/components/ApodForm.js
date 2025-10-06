import React from "react";
import DateInputComponent from "./DateInputComponent";

function ApodForm() {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "4px solid #1dd12cff",
    borderRadius: "10px",
    margin: "20px",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <DateInputComponent />
      <button type="submit">dancing galaxy</button>
    </form>
  );
}

export default ApodForm;
