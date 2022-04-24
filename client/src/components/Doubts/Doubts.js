import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Doubt from "./Doubt/Doubt";

const Doubts = ({ setCurrentId }) => {
  const { doubts, isLoading } = useSelector((state) => state.doubts);


  if (!doubts.length && !isLoading) return <h1>No Doubts</h1>;

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      {doubts?.map((doubt) => (
        <Grid key={doubt._id} item>
          <Doubt doubt={doubt} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </div>
  );
};

export default Doubts;