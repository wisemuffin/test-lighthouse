import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import AccessTime from "@material-ui/icons/AccessTime";
import FaceIcon from "@material-ui/icons/Face";
import distanceFromWordsToNow from "date-fns/distance_in_words_to_now";

import Context from "../../storeContext/context";

const VizContent = ({
  id,
  classes,
  title,
  image,
  content,
  componentType,
  vizAuthor,
  createdAt,
  comments
}) => {
  const { dispatchContext } = useContext(Context);
  const handleSelectViz = viz => {
    console.log("current viz is: ", viz);
    dispatchContext({ type: "CURRENT_VIZ", payload: viz });
  };
  const link = `/visualisations/${title}`;

  return (
    <Grid key={id} item sm={6} md={4} lg={3}>
      <Link
        className={classes.link}
        onClick={() =>
          handleSelectViz({
            id,
            classes,
            title,
            image,
            content,
            componentType,
            vizAuthor,
            createdAt,
            comments
          })
        }
        to={link}
      >
        <Card className={classes.card}>
          <CardHeader
            classes={{ title: classes.title }}
            className={classes.cardHeader}
            title={`${title}`}
            titleTypographyProps={{ align: "center" }}
            subheaderTypographyProps={{ align: "center" }}
            // color="secondary"
          />
          <CardMedia
            className={classes.cardMedia}
            src={image}
            title={title}
            component={componentType}
            alt={title}
            autoPlay={true}
            loop={true}
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.text} component="h3" variant="h6">
              <FaceIcon className={classes.icon} /> {vizAuthor.name}
            </Typography>
            <Typography
              className={classes.text}
              variant="subtitle2"
              color="inherit"
              gutterBottom
            >
              <AccessTime className={classes.icon} />
              {distanceFromWordsToNow(createdAt) + " ago"}
            </Typography>
            <Typography>{content}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(5)
  },
  cardGrid: {
    padding: `${theme.spacing(8)}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    objectFit: "cover"
  },
  cardContent: {
    flexGrow: 1
  },
  icon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  cardHeader: {
    backgroundColor: theme.palette.warning[500],
    boxShadow: theme.boxShadow,
    marginBottom: theme.spacing(1)
  },
  title: {
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
});

export default withStyles(styles)(VizContent);
