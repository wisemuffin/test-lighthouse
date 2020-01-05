import React, { useContext, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Context from "../../storeContext/context";

import CreateComment from "../Comment/CreateComments";
import Comments from "../Comment/Comments";
import * as subscriptions from "../../graphql/subscriptions";
import API, { graphqlOperation } from "@aws-amplify/api";
// import {
//   onCreateViz,
//   onCreateComments,
//   onDeleteViz
// } from "../../graphql/subscriptions";

const VizComment = ({ classes }) => {
  const { stateContext, dispatchContext } = useContext(Context);

  useEffect(() => {
    // const subscription = API.graphql(graphqlOperation(onCreateViz)).subscribe({
    //   next: eventData => {
    //     const Viz = eventData.value.data.onCreateViz;
    //     dispatchContext({ type: "CREATE_PIN", Viz });
    //   }
    // });
    console.log("state context: ", stateContext);
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateCommentWithId, {
        // input: {
        vizId: stateContext.currentViz.id
        // }
      })
    ).subscribe(
      {
        next: eventData => {
          console.log("event data", eventData);
          const commentToAdd = eventData.value.data.onCreateCommentWithId;
          dispatchContext({ type: "CREATE_COMMENT", payload: commentToAdd });
        }
      },
      []
    );

    // const subscription3 = API.graphql(graphqlOperation(onDeleteViz)).subscribe({
    //   next: (eventData) => {
    //     const Viz = eventData.value.data.onDeleteViz;
    //     dispatchContext({ type: 'DELETE_PIN', Viz })
    //   }
    // })

    // return () => subscription.unsubscribe();
  }, []);

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        Responses
      </Typography>
      <CreateComment />
      <Comments />
    </div>
  );
};

const styles = theme => ({
  root: {
    // display: "flex",
    // textAlign: "center",
    paddingTop: theme.spacing(4)
  },
  title: {
    textAlign: "center"
  }
});
export default withStyles(styles)(VizComment);
