import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { colors } from "../theme";

interface IArticle {
  name: string;
  text: string;
}
interface IProps {
  content: IArticle;
}

const Article = (props: IProps) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      borderLeft: "3px solid black",
      backgroundColor: "#f7f1e3",
      textAlign: "left",
      fontFamily: "Verdana",
      marginTop: "10px"
    }
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root} padding="8px">
      <h3>{props.content.name ? props.content.name : <CircularProgress />}</h3>
      <p>{props.content.text}</p>
    </Box>
  );
};
export default Article;
