import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <Button
        component={Link}
        to="/auth/student"
        variant="contained"
        color="primary"
        size="large"
      >
        Student Login
      </Button>
      <Button
        component={Link}
        to="/auth/teacher"
        variant="contained"
        color="secondary"
        size="large"
      >
        Teacher Login
      </Button>
    </>
  );
};

export default Auth;
