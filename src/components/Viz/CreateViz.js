import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhotoTwoTone";
import LandscapeIcon from "@material-ui/icons/LandscapeOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/SaveTwoTone";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Context from "../../storeContext/context";

import { Auth } from "aws-amplify";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createViz, createUser } from "../../graphql/mutations";
import { getUser } from "../../graphql/queries";

const CreateViz = ({ classes }) => {
  const mobileSize = useMediaQuery("(max-width: 650px)");

  const { dispatchContext, stateContext } = useContext(Context);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [componentType, setComponentType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { currentUser } = stateContext;

  useEffect(() => {
    getAuthor();
  }, []);

  const getAuthor = async () => {
    try {
      const User = await Auth.currentAuthenticatedUser({
        bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      });
      dispatchContext({
        type: "CURRENT_USER",
        payload: { clientId: User.pool.clientId, username: User.username }
      });
    } catch (err) {
      console.log("error trying to get user: ", err);
    }
  };
  const checkAuthorInDb = async event => {
    // first need to create used if no user exists
    event.preventDefault();
    try {
      console.log("lets go get the current user");
      await API.graphql(
        graphqlOperation(getUser, { id: currentUser.clientId })
      );
      console.log("i gonna check for user", checkAuthorInDb);
      if (checkAuthorInDb == null) {
        console.log("oh there is a user here");
        // create the user in dynamo db if doesnt exist
        const variables = {
          author: { name: currentUser.username, id: currentUser.clientId }
        };
        await API.graphql(graphqlOperation(createUser, { input: variables }));
        console.log("i also created the user");
      }
    } catch (err) {
      console.log("failed to add user");
    }
    return;
  };
  const handleSubmit = async event => {
    console.log("running checkAuthorInDb");
    await checkAuthorInDb(event);
    console.log("success checkAuthorInDb");
    console.log("running createViz");
    try {
      event.preventDefault();
      setSubmitting(true);
      const url = await handleImageUpload();
      const variables = {
        title,
        image: url,
        content,
        componentType: componentType,
        vizAuthorId: currentUser.clientId
      };
      await API.graphql(graphqlOperation(createViz, { input: variables }));
      // handleDeleteDraft();
    } catch (err) {
      setSubmitting(false);
      console.error("Error creating pin", err);
    }
  };

  const handleDeleteDraft = event => {
    event.preventDefault();
    setContent("");
    setImage("");
    setTitle("");
    setComponentType("");
    dispatchContext({ type: "DELETE_DRAFT" });
  };

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "geopins");
    data.append("cloud_name", "dkn8xtjbm");
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/dkn8xtjbm/${
        componentType === "video" ? "video" : "image"
      }/upload`,
      data
    );
    return res.data.url;
  };
  return (
    <form className={classes.form}>
      <Typography
        className={classes.alignCenter}
        component="h2"
        variant="h4"
        color="secondary"
      >
        <LandscapeIcon className={classes.iconLarge} />
        Add Visulisation
      </Typography>
      <div>
        <TextField
          name="title"
          label="Title"
          placeholder="Insert pin title"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          accept="image/*"
          id="image"
          type="file"
          className={classes.input}
          onChange={e => setImage(e.target.files[0])}
        />
        <label htmlFor="image">
          <Button
            component="span"
            size="small"
            className={classes.button}
            style={{ color: image ? "green" : "" }}
          >
            <AddAPhotoIcon />
          </Button>
        </label>
      </div>
      <div>
        <TextField
          name="componentType"
          label="Component Type"
          placeholder="Insert pin Component Type"
          onChange={e => setComponentType(e.target.value)}
        />
      </div>
      <div className={classes.contentField}>
        <TextField
          name="content"
          label="Content"
          multiline
          rows={mobileSize ? "3" : "6"}
          margin="normal"
          fullWidth
          variant="outlined"
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleDeleteDraft}
        >
          <ClearIcon className={classes.leftIcon} />
          Discard
        </Button>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="secondary"
          disabled={!title.trim() || !content.trim() || !image || submitting}
          onClick={handleSubmit}
        >
          Submit
          <SaveIcon className={classes.rightIcon} />
        </Button>
      </div>
    </form>
  );
};

const styles = theme => ({
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: theme.spacing(1)
  },
  contentField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%"
  },
  input: {
    display: "none"
  },
  alignCenter: {
    display: "flex",
    alignItems: "center"
  },
  iconLarge: {
    fontSize: 40,
    marginRight: theme.spacing(1)
  },
  leftIcon: {
    fontSize: 20,
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    fontSize: 20,
    marginLeft: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: 0
  }
});

export default withStyles(styles)(CreateViz);
