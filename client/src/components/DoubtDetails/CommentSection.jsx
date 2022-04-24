import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { commentDoubt } from "../../actions/doubts";
import { useTranslation } from 'react-i18next';
import useStyles from "./styles";

const CommentSection = ({ doubt }) => {
  //window.location.reload();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comments, setComments] = useState(doubt?.comments);
  const [comment, setComment] = useState("");
  const {t,i18n} = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const commentsRef = useRef();

  useEffect(() => {
    setComments(doubt.comments);
  }, [doubt]);

  const handleComment = async () => {
    const newComments = await dispatch(
      commentDoubt(`${user?.result?.name}: ${comment}`, doubt._id)
    );

    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(doubt);
  return (
    <div>
      {user?.result?.name && (
        <div style={{ width: "90%" }}>
          <Typography gutterBottom variant="h6">
            {t("Write a comment")}
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label={t("Comment")}
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            variant="contained"
            color="primary"
            onClick={handleComment}
          >
            {t("Comment")}
          </Button>
        </div>
      )}
      <div className={classes.commentsOuterContainer}>
        <div
          className={classes.commentsInnerContainer}
          style={{ width: "90%" }}
        >
          <Typography gutterBottom variant="h6">
            {t("Comments")}
          </Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(": ")[0]}</strong>
              {c.split(":")[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;