import React, { useState, Fragment, useContext } from "react";
import { withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import SendIcon from "@material-ui/icons/Send";
import Divider from "@material-ui/core/Divider";

import Context from "../../storeContext/context";

import { createComment } from "../../graphql/mutations";
import API, { graphqlOperation } from "@aws-amplify/api";
import config from "../../aws-exports";

API.configure(config);

const CreateComment = ({ classes }) => {
  const { stateContext } = useContext(Context);
  const [comment, setComment] = useState("");

  const handleSubmitComment = async e => {
    // stops refreshing page when form submitted
    e.preventDefault();
    if (stateContext.currentUser) {
      await API.graphql(
        graphqlOperation(createComment, {
          input: {
            text: comment,
            commentAuthorId: stateContext.currentUser.clientId,
            vizId: stateContext.currentViz.id
          }
        })
      );
      setComment("");
    } else {
      alert("sign in before commenting");
    }
  };
  return (
    <Fragment>
      <form className={classes.form}>
        <IconButton
          onClick={() => setComment("")}
          disabled={!comment.trim()}
          className={classes.clearButton}
        >
          <ClearIcon />
        </IconButton>
        <InputBase
          multiline={true}
          className={classes.input}
          placeholder="Add Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <IconButton
          onClick={handleSubmitComment}
          disabled={!comment.trim()}
          className={classes.sendButton}
        >
          <SendIcon />
        </IconButton>
      </form>
      <Divider />
    </Fragment>
  );
};

const styles = theme => ({
  form: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  clearButton: {
    padding: 0,
    color: "red"
  },
  sendButton: {
    padding: 0,
    color: theme.palette.secondary.dark
  }
});

export default withStyles(styles)(CreateComment);
