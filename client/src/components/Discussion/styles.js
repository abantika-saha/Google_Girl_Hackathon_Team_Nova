import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export default makeStyles((theme)=>({
    root:{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
}))