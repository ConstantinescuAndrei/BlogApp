import React, { useState, useEffect } from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Menu from './components/Menu/Menu'
import UserBlogs from './components/Blogs/UserBlogs/UserBlogs';
import SingleBlog from './components/Blogs/SingleBlog/SingleBlog'
import { saveBlogs } from './Redux/actions';
import { useDispatch } from "react-redux";
import axios from 'axios';

const useStyles = makeStyles({
  gridRoot: {
    flexGrow: "1",
  },
  blogs: {
    alignContent: "center",
    alignItems: "center"
  },
  typoraphy: {
    alignCenter: 'center',
    alignItems: "center"
  }
})

function App() {  
  const classes = useStyles();
  const [showBlogs, setShowBlogs] = useState(false);
  const dispatch = useDispatch();
  const blogsLink = "http://localhost:5000/blogs";

  const handleBlogs = () => {
    setShowBlogs(!showBlogs);
  }

  useEffect(() => {
      async function fetchBlogs() {
        const response = await axios.get(blogsLink);
        dispatch(saveBlogs(response.data));
        handleBlogs();
      }
      
      fetchBlogs();
    }, [])

  return (
    <Router>
      <Grid container spacing={2} className={classes.gridRoot}>
        <Grid item sm={12}>
          <Header />
        </Grid>         
        <Grid item container>
          <Grid item xs={1} md={2} />
          <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/blogs" exact component={UserBlogs} />
            <Route path="/blogs/:id" component={SingleBlog} />          
          </Switch>
          <Grid item xs={1} md={2} />
        </Grid>
      </Grid>    
    </Router>
  );
}

export default App;
