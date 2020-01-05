import React from "react";
import { Authenticator } from "aws-amplify-react";

import withStyles from "@material-ui/core/styles/withStyles";

import Layout from "../../components/UI/Layout";

const federated = {
  google_client_id:
    "882661983925-t7ktv22un8oqrh4fv6hu5fbeoclk5kb5.apps.googleusercontent.com",
  facebook_app_id: "713443335763509"
};

const Auth = props => {
  const { classes } = props;

  return (
    <Layout>
      <div className={props.classes.root} />
      <Authenticator
        federated={federated}
        theme={{
          formContainer: { margin: 0 },
          formSection: { margin: 0 }
        }}
        // usernameAttributes="email"
      ></Authenticator>
      {/* <Greetings /> */}
    </Layout>
  );
};

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(5)
  }
});

export default withStyles(styles)(Auth);
