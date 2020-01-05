import React, { useContext, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import distanceFromWordsToNow from "date-fns/distance_in_words_to_now";
import Context from "../../storeContext/context";

import { listComments } from "../../graphql/queries";
import API, { graphqlOperation } from "@aws-amplify/api";
import config from "../../aws-exports";

API.configure(config);

const Comments = ({ classes }) => {
  const { stateContext } = useContext(Context);
  const comments = stateContext.currentViz.comments.items;

  return comments.length ? (
    <List className={classes.root}>
      {comments &&
        comments.map((comment, i) => (
          <ListItem key={i} alignItems="flex-start">
            {/* <ListItemAvatar>
              <Avatar src={comment.commentAuthor.picture} alt={comment.author.name} />
            </ListItemAvatar> */}
            <ListItemText
              primary={comment.text}
              secondary={
                <>
                  <Typography
                    className={classes.inline}
                    component="span"
                    color="textPrimary"
                  >
                    {comment.commentAuthor.name}
                  </Typography>
                  {/* {distanceFromWordsToNow(Number(comment.createdAt))} ago */}
                  . {distanceFromWordsToNow(comment.createdAt)} ago
                </>
              }
            />
          </ListItem>
        ))}
    </List>
  ) : (
    <div>no comments</div>
  );
};

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

export default withStyles(styles)(Comments);
