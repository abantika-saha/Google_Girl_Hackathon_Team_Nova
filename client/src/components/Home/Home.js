import React from "react";
import useStyles from "./styles";

const Home = ({ open }) => {
  const classes = useStyles();
  return (
    <div className={open ? classes.root : null}>
      <h1>Schedule</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&src=c29oaW5pMjAxOUBnbWFpbC5jb20&src=Y2xhc3Nyb29tMTAzNjg0NDM4NTYwOTEyMzU5ODEyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%237627bb"
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
};

export default Home;