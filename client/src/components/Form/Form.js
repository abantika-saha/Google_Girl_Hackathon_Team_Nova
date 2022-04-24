import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Card } from "@material-ui/core";
import { createDoubt, updateDoubt } from "../../actions/doubts";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user ? user.result._id : "0";
  const [doubtData, setDoubtData] = useState({
    name: "",
    question: "",
    creator: id,
  });
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  console.log(doubtData.creator);
  const doubt = useSelector((state) =>
    currentId
      ? state.doubts.doubts.find((question) => question._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(id);

  const clear = () => {
    setCurrentId(0);
    setDoubtData({ name: "", question: "", creator: "" });
  };

  useEffect(() => {
    if (doubt) setDoubtData(doubt);
  }, [doubt]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateDoubt(currentId, doubtData));
      clear();
    } else {
      dispatch(createDoubt(doubtData, history));
      clear();
    }
  };

  return (
    <Card className={classes.card} borderradius="borderradius" elevation={6}>
      <h1>{t("Ask your doubt?")}</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField
          name="name"
          spacing={5}
          variant="outlined"
          label={t("What's your name?")}
          fullWidth
          value={doubtData.name}
          onChange={(e) => setDoubtData({ ...doubtData, name: e.target.value })}
        />

        <TextField
          style={{ margin: "1% auto" }}
          name="question"
          spacing={5}
          variant="outlined"
          label={t("Ask a question")}
          fullWidth
          multiline
          rows={4}
          value={doubtData.question}
          onChange={(e) =>
            setDoubtData({ ...doubtData, question: e.target.value })
          }
        />
        <Button
          variant="contained"
          spacing={5}
          style={{ margin: "0% auto" }}
          color="primary"
          size="small"
          type="submit"
        >
          {t("Ask")}
        </Button>
        <Button
          variant="contained"
          spacing={5}
          color="secondary"
          size="small"
          onClick={clear}
        >
          {t("Cancel")}
        </Button>
      </form>
    </Card>
  );
};

export default Form;
