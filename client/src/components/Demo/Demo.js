import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Discussion = () => {
  const {t,i18n} = useTranslation();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  if (!user) {
    history.push("/auth");
  }

  return (
    <div>
        <h1>{t("Welcome Users! Here's how you can access this Website")}</h1>
      <iframe
        src="https://www.youtube.com/embed/gBmEfwNbZVs"
        width="100%"
        height="600"
      ></iframe>
    </div>
  );
};

export default Discussion;
