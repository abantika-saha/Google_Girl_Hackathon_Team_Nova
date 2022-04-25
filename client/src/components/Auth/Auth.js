import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Auth = () => {
  const {t,i18n} = useTranslation();
  return (
    <>
      <Button
        component={Link}
        to="/auth/student"
        variant="contained"
        color="primary"
        size="large"
      >
        {t("Student Login")}
      </Button>
      <Button
        component={Link}
        to="/auth/teacher"
        variant="contained"
        color="secondary"
        size="large"
      >
        {t("Teacher Login")}
      </Button>
    </>
  );
};

export default Auth;

