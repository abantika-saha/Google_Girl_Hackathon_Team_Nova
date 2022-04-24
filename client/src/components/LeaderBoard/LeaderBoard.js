import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const LeaderBoard = () => {
  const classes = useStyles();
  const [leaderboard, setLeaderboard] = useState([]);
  const {t,i18n} = useTranslation();
  useEffect(() => {
    const getLeaderboard = async () => {
      const board = await axios.get("http://localhost:5000/leaderboard");

      setLeaderboard(board.data);
    };
    getLeaderboard();
  }, []);
  return (
<div>
    <Typography variant="h3" color="primary">{t("Leaderboard")}</Typography>
    <br/>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">  
              <TableHead>
                <TableRow>
                  <TableCell ><Typography variant="h5" color="primary"><strong>{t("Rank")}</strong></Typography></TableCell>
                  <TableCell align="right"><Typography variant="h5" color="primary"><strong>{t("Name")}</strong></Typography></TableCell>
                  <TableCell align="right"><Typography variant="h5" color="primary"><strong>{t("Score")}</strong></Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {leaderboard
              .sort((a, b) => (a.count < b.count ? 1 : -1))
              .map((leaderboard, i) => (
                <TableRow key={leaderboard._id}>
                  <TableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row"
                  >
                    <Typography variant="h6" color="primary">
                      {i + 1}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                     {leaderboard.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="primary">
                      {leaderboard.count}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div> 
        );
      };

export default LeaderBoard;