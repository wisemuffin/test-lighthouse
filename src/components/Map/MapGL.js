import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, {
  NavigationControl,
  Marker,
  Popup,
  SVGOverlay
} from "react-map-gl";
import { withStyles } from "@material-ui/core/styles";
import { fromJS } from "immutable";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import INITIAL_MAP_STYLE from "../../shared/mapStyle.json";

// because https://github.com/uber/react-map-gl/issues/135
// you cannot enter % or vh/vw for uber's react-map-gl viewport.width/height
const Map = ({ classes, latitude, longitude, zoom, mag, width, height }) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
    width,
    height
  });

  const mobileSize = useMediaQuery("(max-width: 650px)");

  const redraw = ({ project }) => {
    const [cx, cy] = project([longitude, latitude]);
    return <circle cx={cx} cy={cy} r={mag * 10} fill="red" opacity="0.3" />;
  };
  const WISE_REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoiZGluZ29kYXZlIiwiYSI6ImNrNDU5c29oajA0NTgzb21ub2g1Nnl2NmcifQ.HIT9LpTert0m75sMWDmIRw";
  return (
    <div className={mobileSize ? classes.rootMobile : classes.root}>
      <ReactMapGL
        width={width}
        height={height}
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={WISE_REACT_APP_MAPBOX_TOKEN}
        onViewportChange={newViewport => setViewport(newViewport)}
        scrollZoom={!mobileSize}
        mapStyle={INITIAL_MAP_STYLE}
        {...viewport}
      >
        <SVGOverlay redraw={redraw} />
        <div className={classes.navigationControl}>
          <NavigationControl
            onViewportChange={newViewport => setViewport(newViewport)}
          />
        </div>
      </ReactMapGL>
    </div>
  );
};

const styles = {
  root: {
    display: "flex"
  },
  rootMobile: {
    display: "flex",
    flexDirection: "column-reverse"
  },
  navigationControl: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "1em"
  }
};
export default withStyles(styles)(Map);
