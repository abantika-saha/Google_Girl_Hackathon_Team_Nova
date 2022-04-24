import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoubts } from "../../actions/doubts";
import Form from "../Form/Form";
import Doubts from "../Doubts/Doubts";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Discussion = ({ open }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  if (!user) {
    history.push("/auth");
  }
  const [currentId, setCurrentId] = useState(0);
  const doubts = useSelector((state) => state.doubts);
  const dispatch = useDispatch();
  const classes = useStyles();


  useEffect(() => {
    dispatch(getDoubts());
  }, [currentId, dispatch]);

  console.log(doubts);

  return (
    <div className={open ? classes.root : null}>
      <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
      <Doubts setCurrentId={setCurrentId}></Doubts>
    </div>
  );
};

export default Discussion;
