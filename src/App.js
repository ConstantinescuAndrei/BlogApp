import React, { useState, useEffect } from 'react'
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Menu from './components/Menu'
import SingleBlog from './components/Blogs/SingleBlog/SingleBlog'

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
  const [showBlogs, setShowBlogs] = useState(false)

  const handleBlogs = () => {
    setShowBlogs(!showBlogs);
  }

  return (
    <Router>
      <Grid container spacing={4} className={classes.gridRoot}>
        <Grid item xs={12}>
          <Header handleBlogs={handleBlogs}/>
        </Grid>   
        <Grid item xs={12} />
        <Grid container styles={{marginLeft: "10%", marginRight: "10%"}}>
          <Switch>
            <Route path="/blogs" exact component={Menu} />
            <Route path="/blogs/:id" component={SingleBlog} />          
          </Switch>
        </Grid>
      </Grid>    
    </Router>
  );
}

export default App;
