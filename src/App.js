import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import TableauReport from "tableau-react-embed";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import API, { graphqlOperation } from "@aws-amplify/api";
import { listVizs } from "./graphql/queries";

Amplify.configure(awsconfig);

const options = {
  height: 2100,
  width: 1000,
  hideTabs: false,
  margin: "auto"
  // All other vizCreate options are supported here, too
  // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
};

function App() {
  useEffect(() => {
    getVizs();
  }, []);
  const getVizs = async () => {
    console.log("lets get somme viz");
    const vizs = await API.graphql(graphqlOperation(listVizs));
    console.log("my vizs are: ", vizs.data.listVizs.items);
  };
  return (
    <div className="App">
      <TableauReport
        url="https://public.tableau.com/views/LeagueofLegends-Esports-2019SpringLeague/LeagueOfLegends2019?:display_count=y&:origin=viz_share_link"
        // url="http://reports.my-site.com/my-workbook/my-report"
        // token="<TRUSTED TICKET HERE>"
        options={options}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
