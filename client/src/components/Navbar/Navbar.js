import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

const Navbar = ({ open, setOpen }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const teacherLinks = ["/my-courses","/demo", "/resources", "/assignments", "/messages", "/discussion", "/poll-system", "/tests","/add-course"];
  const studentLinks = ["/my-courses","/elective-courses", "/demo", "/resources", "/assignments", "/messages", "/discussion","/leaderboard", "/poll-system", "/tests"];

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");
    
    setOpen(false);
    setUser(null);
  };

  const eliminatedLinks = ["/auth", "/auth/student", "/auth/teacher"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const assign = (link)=>{
    history.push(link);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className={classes.root}>
      <AppBar
        className={`${classes.appBar} ${
          eliminatedLinks.includes(location.pathname) || !open
            ? null
            : classes.widthChanger
        }`}
        position="static"
        color="inherit"
      >
        <div className={classes.navBrand}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            id="open"
            className={
              open || eliminatedLinks.includes(location.pathname)
                ? classes.hide
                : null
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.Header}>
            Amalgam
          </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        align="left"
        variant="persistent"
        classes={{ paper: classes.paperWidth }}
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={{color:"white"}}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>DASHBOARD</ListItem>
          <Divider />
          <ListItem className={classes.aboutMe}>About Me</ListItem>
          <ListItem button>PREVIEW PROFILE</ListItem>
          <ListItem button>UPDATE PROFILE</ListItem>
          <Divider />
          {/* <ListItem className={classes.aboutMe}>My University Lists</ListItem>
          <ListItem button>My Courses</ListItem>
          {/* <ListItem button>Elective Courses</ListItem> */}
          {/* <ListItem button>Demo</ListItem> */}
          {/* <ListItem button>Resources</ListItem>
          <ListItem button>Assignments</ListItem>
          <ListItem button>Messages</ListItem>
          <ListItem button>Discussion Forum</ListItem>
          <ListItem button>Student Leaderboard</ListItem>
          <ListItem button>Poll System</ListItem>
          <ListItem button>Tests</ListItem> */} 
        
          {console.log(Object.userType)}
          {user?(user.result.year!=null?
          studentLinks.map((link)=><ListItem onClick={()=>assign(link)} button>{link.slice(1).replace("-"," ").toUpperCase()}</ListItem>):
          teacherLinks.map((link)=><ListItem onClick={()=>assign(link)} button>{link.slice(1).replace("-"," ").toUpperCase()}</ListItem>)):null}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;