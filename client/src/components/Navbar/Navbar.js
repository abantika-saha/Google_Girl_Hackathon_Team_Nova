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
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useTranslation } from "react-i18next";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

const Navbar = ({ open, setOpen }) => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const teacherLinks = [
    "/my-courses",
    "/demo",
    "/resources",
    "/assignments",
    "/messages",
    "/discussion",
    "/polls",
    "/tests",
  ];
  const studentLinks = [
    "/my-courses",
    "/elective-courses",
    "/demo",
    "/resources",
    "/assignments",
    "/messages",
    "/discussion",
    "/leaderboard",
    "/polls",
    "/tests",
  ];

  const [language, setLanguage] = useState("en");

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setOpen(false);
    setUser(null);
  };

  const handleLang = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const eliminatedLinks = ["/auth", "/auth/student", "/auth/teacher"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const assign = (link) => {
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
            {t("Amalgam")}
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
                {t("Logout")}
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              {t("Sign In")}
            </Button>
          )}
        </Toolbar>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("Language")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Age"
              onChange={handleLang}
            >
              <MenuItem value={"en"}>{t("English")}</MenuItem>
              <MenuItem value={"hi"}>{t("Hindi")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </AppBar>
      <Drawer
        align="left"
        variant="persistent"
        classes={{ paper: classes.paperWidth }}
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
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
          {console.log(Object.userType)}
          {user
            ? user.result.year != null
              ? studentLinks.map((link) => (
                  <ListItem onClick={() => assign(link)} button>
                    {link.slice(1).replace("-", " ").toUpperCase()}
                  </ListItem>
                ))
              : teacherLinks.map((link) => (
                  <ListItem onClick={() => assign(link)} button>
                    {link.slice(1).replace("-", " ").toUpperCase()}
                  </ListItem>
                ))
            : null}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
