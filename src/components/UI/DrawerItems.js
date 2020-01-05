import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import ListItemLink from "@material-ui/core/ListItemLink";

import MultiChartIcon from "@material-ui/icons/MultilineChart";
import ChartIcon from "@material-ui/icons/BarChartOutlined";
// import TableChartIcon from "@material-ui/icons/TableChart";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    },
    alignItems: "center"
  },
  grow: {
    flexGrow: 1
  }
}));

const drawerItems = [
  {
    name: "Home",
    link: "/",
    icon: <ChartIcon />
  },
  {
    name: "Visualisations",
    link: "/visualisations",
    icon: <MultiChartIcon />
  },

  {
    name: "Daves testing ground",
    link: "/test",
    icon: <MultiChartIcon />
  },
  {
    name: "Viz Admin",
    link: "/vizadmin",
    icon: <MultiChartIcon />
  },
  {
    name: "Viz pick and comment",
    link: "/vizpickandcomment",
    icon: <MultiChartIcon />
  }
];

const DrawerItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {drawerItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {/* <ListItemLink href={item.link}> */}
            <ListItemText primary={item.name} />>{/* </ListItemLink> */}
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className={classes.grow} />
    </div>
  );
};

export default DrawerItems;
