import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
const Content = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      //border: "1px solid red",
      margin: "0 auto",
      minHeight: "80vh"
    }
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex" width="80%">
      <Sidebar location={props.location} />
      <Section mats={props.mats} />
    </Box>
  );
};

export default Content;
