import React, { useState, useRef, useEffect} from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { commentDoubt } from '../../actions/doubts';
import { useTranslation } from 'react-i18next';
import useStyles from "./styles";

const CommentSection = ({ doubt }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comments, setComments] = useState(doubt?.comments);
  const [comment, setComment] = useState("");
  const {t,i18n} = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    setComments(doubt.comments);
  }, [doubt]);

  const handleComment = async () => {
    const newComments = await dispatch(
      commentDoubt(`${user?.result?.name}: ${comment}`, doubt._id)
    );

    setComment("");
    setComments(newComments);
  };

  console.log(doubt);
  return (
    <div>
      <div >
        <div >
          <Typography gutterBottom variant="h5">
            <strong>{t("Comments:")}</strong>
          </Typography>
          {!comments[0] && <h3>No comments yet!</h3>}
            {comments[0] && <Typography key={0} gutterBottom variant="subtitle1">
              <strong>{comments[0].split(': ')[0]}</strong>
              {comments[0].split(':')[1]}
            </Typography>}     
            {comments[1] && <Typography key={1} gutterBottom variant="subtitle1">
              <strong>{comments[1].split(': ')[0]}</strong>
              {comments[1].split(':')[1]}
            </Typography>}  
            {comments[2] && <Typography key={1} gutterBottom variant="subtitle1">
              <strong>{comments[2].split(': ')[0]}</strong>
              {comments[2].split(':')[1]}
            </Typography>}  
            {comments[3] && <Typography key={1} gutterBottom variant="subtitle1">
              <strong>{comments[3].split(': ')[0]}</strong>
              {comments[3].split(':')[1]}
            </Typography>}  
            {comments[4] && <Typography key={1} gutterBottom variant="subtitle1">
              <strong>{comments[4].split(': ')[0]}</strong>
              {comments[4].split(':')[1]}
            </Typography>}   
        </div>
        <div style={{ width: "70%" }}>
          <br />

        </div>
      </div>
    </div>
  );
};

export default CommentSection;