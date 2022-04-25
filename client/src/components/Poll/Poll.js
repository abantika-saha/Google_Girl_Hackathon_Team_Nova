import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Poll = () => {
  const { t, i18n } = useTranslation();
  return (
    <div class="form-container">
      <form class="register-form">
        {
          <div class="success-message">
            {t("Fill the form to submit your opinion")}
          </div>
        }
        <input
          id="roll number"
          class="form-field"
          type="text"
          placeholder={t("Roll Number")}
          name="Roll Number"
        />
        <input
          id="type of class"
          class="form-field"
          type="text"
          placeholder={t("Type Online or Offline")}
          name=""
        />
        <button class="form-field" type="submit">
          {t("Submit")}
        </button>
      </form>
    </div>
  );
};

export default Poll;
