import React from "react";
import useStyles from "./styles";

const Home = ({ open }) => {
  const classes = useStyles();
  return (
    <div className={open ? classes.root : null}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;