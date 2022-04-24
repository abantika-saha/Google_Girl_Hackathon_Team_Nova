import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  addpostarea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "100px",
    width: "50%",
    alignItems: 'center'
  },
  addpost: {
    padding: "40px 2px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    padding: "20px 10px",
    width: "1400px",
    borderStyle: 'solid',
    borderColor: 'grey'
  },
  secondcard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    padding: "20px 10px",
    width: "1400px",
    borderStyle: 'solid',
    borderColor: 'grey'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
}));