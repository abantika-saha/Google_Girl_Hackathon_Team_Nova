import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '0 0 30px 0',
    // background: "linear-gradient(40deg,#ff6ec4,#7873f5)",
    backgroundImage: "linear-gradient(to right, #4983fb, #009dff, #00b3ff, #03c7fc, #5bd8f5)",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "1px 15px"
  },
  navBrand:{
    display:"flex",
    justifyContent:"space-between"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  hide:{
    visibility:'hidden'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  Header:{
    marginTop:"6px",
    marginLeft:"15px"
  },
  paperWidth:{
    width:drawerWidth,
    backgroundImage: "linear-gradient(to bottom, #4983fb, #009dff, #00b3ff, #03c7fc, #5bd8f5)",
    color:"white",
    fontSize:"1.3rem",
    fontFamily:"Lato"
  },
  root:{
    display:"flex",
    color:"white"
  },
  widthChanger:{
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));