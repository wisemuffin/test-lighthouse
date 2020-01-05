import React, { useState, useContext, Fragment } from "react";
// import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

// import SearchIcon from "@material-ui/icons/Search";
// import InputBase from "@material-ui/core/InputBase";
// import Badge from "@material-ui/core/Badge";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import WbSunny from "@material-ui/icons/WbSunny";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";

import { fade } from "@material-ui/core/styles/colorManipulator";

import DrawerItems from "./DrawerItems";

import Context from "../../storeContext/context";
import ThemeContext from "../../storeContext/themeContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Greetings } from "aws-amplify-react";

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    // zIndex: 1,
    // overflow: "hidden",
    // position: "relative",
    // display: "flex",
    // width: "100%"
  },

  grow: {
    flexGrow: 1,
    display: "flex"
    // alignItems: "center"
  },
  appBar: {
    // alignItems: "flex-start"
    // position: "absolute"
    // marginLeft: DRAWER_WIDTH,
    // [theme.breakpoints.up("md")]: {
    //   width: `calc(100% - ${DRAWER_WIDTH}px)`
    // }
  },
  toolbar: {
    // alignItems: "flex-start",
    // justifyContent: "normal",
    // "flex-direction": "column"
    "justify-content": "start"
  },
  menuButton: {
    // [theme.breakpoints.up("md")]: {
    //   display: "none"
    // }
    marginRight: theme.spacing(2)
  },
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    },
    alignItems: "center"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: 50
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "green",
    fontSize: 45
  },
  mobile: {
    display: "none"
  },
  picture: {
    height: "50px",
    borderRadius: "90%",
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  greetings: {
    backgroundColor: theme.palette.primary,
    border: "0px",
    color: "inherit",
    fontFamily: theme.typography.fontFamily
  }
}));

const ResponsiveDrawer = props => {
  const { stateContext } = useContext(Context);
  const { currentUser } = stateContext;
  const { themeContext, dispatchThemeContext } = useContext(ThemeContext);
  const mobileSize = useMediaQuery("(max-width: 650px)");

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleToggleDarkTheme = event => {
    console.log("clicked dark theme");
    dispatchThemeContext({ type: "TOGGLE_DARK_THEME", payload: event });
  };

  // const handleProfileMenuOpen = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = event => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton color="inherit">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton color="inherit">
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <div className={classes.root}>
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            {/* <div className={classes.grow} /> */}
            <IconButton
              color="inherit"
              edge="start"
              aria-label="open drawer"
              onClick={() => handleDrawerToggle()}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Wisemuffin
            </Typography>

            {/* <div className={classes.grow} /> */}
            {/* <div className={mobileSize ? classes.mobile : ""}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </div>
            <div className={classes.grow} /> */}

            <IconButton onClick={handleToggleDarkTheme} color="inherit">
              {themeContext.dark ? <WbSunny /> : <WbSunnyOutlined />}
            </IconButton>

            {/* <div className={classes.grow} /> */}

            <div className={classes.sectionDesktop}>
              {/* <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}

              {/* current user info */}
              <Greetings
                theme={{
                  navBar: {
                    backgroundColor: "#f44336",
                    border: "0px",
                    color: "inherit",
                    fontFamily: "Roboto"
                  }
                }}
                inGreeting={username => "Hello " + username}
                outGreeting={
                  <Button href="/login" color="inherit">
                    Login
                  </Button>
                }
              />
            </div>

            <div className={classes.sectionMobile}>
              {/* <IconButton
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton> */}
              {/* current user info */}
              <Greetings
                inGreeting={username => "Hello " + username}
                // outGreeting="Please sign in..."
                outGreeting={
                  <Button href="/login" color="inherit">
                    Login
                  </Button>
                }
                theme={{
                  navBar: { backgroundColor: "#f44336", border: "0px" }
                }}
              />
            </div>
          </Toolbar>
        </AppBar>

        {/* hides an unhides sub menues */}
        {/* {renderMenu}
        {renderMobileMenu} */}
      </div>

      {/* hides and unhides the drawer */}
      {/* <Hidden mdUp> */}
      <Hidden>
        <Drawer
          variant="temporary"
          // anchor={theme.direction === "rtl" ? "right" : "left"}
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <div classes="toolbar" />
          <DrawerItems />
        </Drawer>
      </Hidden>
      {/* <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div classes="toolbar" />
          <DrawerItems />
        </Drawer>
      </Hidden> */}

      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

export default ResponsiveDrawer;
