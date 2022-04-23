import React from "react";
import useStyles from "./styles";

const Home = ({ open }) => {
  const classes = useStyles();
  return (
    <div className={open ? classes.root : null}>
      <h1>Home</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=family03935848505130645796%40group.calendar.google.com&ctz=Asia%2FKolkata"
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
};

export default Home;
