import React, {useEffect} from 'react'

import { Link, withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Button, IconButton, Toolbar, Typography } from '@material-ui/core'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { isAthenticated } from '../../Auth';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
}))



const Header = ({history}) => {

    const classes = useStyles();

    useEffect(() => {
        console.log('auth',isAthenticated())
    },[])

    const navItems = [
        {title:'Header', path:"/"},
        {title:'Work Shops', path:"/workshops"},
        {title:'Rearch Papers', path:"/researchpaper"},
        {title:'Download', path:"/download"},
        {title:'Contact', path:"/contact"},
    ]

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <IconButton>
                    <FavoriteBorderIcon fontSize="small" />
                </IconButton>
                
                <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
                >
                    ConfoPlanner
                </Typography>
                <Button variant="outlined" size="small">
                    <Link to="/login">Sign In</Link>
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {navItems.map((item) => (
                    <Link
                    color="inherit"
                    noWrap
                    key={item.title}
                    variant="body2"
                    to={item.path}
                    className={classes.toolbarLink}
                  >
                    {item.title}
                  </Link>
                ))}
                {isAthenticated() && (
                   <Link
                    color="inherit"
                    noWrap
                    key="profile"
                    variant="body2"
                    to='/profile'
                    className={classes.toolbarLink}
                    >
                    Profile
                    </Link>
                )}
            </Toolbar>
        </React.Fragment>
    )
}

export default withRouter(Header)
