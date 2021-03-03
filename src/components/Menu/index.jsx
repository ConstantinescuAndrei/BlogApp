import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import Blogs from '../Blogs/index'

const useStyles = makeStyles({
  gridRoot: {
    flexGrow: "1",
  },
  typoraphy: {
    alignCenter: 'center',
    alignItems: "center"
  }
})

const Menu = () => {
    const classes = useStyles();
    const blogs = useSelector(state => state.blog);  

    return (
        <>
            {
                blogs.db === true ? (<Blogs />) : ''
            }
        </>
    )
}

export default Menu
