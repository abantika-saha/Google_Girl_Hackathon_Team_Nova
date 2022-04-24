import React from "react";
import "./styles.css";

const Poll = () => {
  return (
    <div class="form-container">
      <form class="register-form">
        {
          <div class="success-message">Fill the form to submit your opinion</div> }
        <input
          id="roll number"
          class="form-field"
          type="text"
          placeholder="Roll Number"
          name="Roll Number"
        />
        <input
          id="type of class"
          class="form-field"
          type="text"
          placeholder="Type Online or Offline"
          name=""
        />
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Poll;