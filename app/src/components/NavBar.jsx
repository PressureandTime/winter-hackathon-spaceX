import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Link,
  IconButton,
  Tooltip
} from "@material-ui/core";
import { WbSunnyOutlined, Brightness2Outlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const NavBar = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();

  const NavLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

  return (
    <CssBaseline>
      <AppBar position="static">
        <Toolbar>
          <Link color="inherit" to="/" component={NavLink}>
            <Typography variant="h6" component="h1">
              SpaceX Launches Thing
            </Typography>
          </Link>

          <nav className={classes.nav}>
            <Link
              variant="button"
              color="inherit"
              to="/launches"
              component={NavLink}
              className={classes.link}
            >
              Launches
            </Link>

            <Link
              variant="button"
              color="inherit"
              to="/missions"
              component={NavLink}
              className={classes.link}
            >
              Missions
            </Link>

            <Link
              variant="button"
              color="inherit"
              to="/rockets"
              component={NavLink}
              className={classes.link}
            >
              Rockets
            </Link>

            <Tooltip title={darkMode ? "Set Light Theme" : "Set Dark Theme"}>
              <IconButton
                aria-label={darkMode ? "Light Theme" : "Dark Theme"}
                color="inherit"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {darkMode ? <WbSunnyOutlined /> : <Brightness2Outlined />}
              </IconButton>
            </Tooltip>
          </nav>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 3)
  },
  nav: {
    marginLeft: "auto"
  }
}));

export default NavBar;
