import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

export default makeStyles((theme) => ({
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));