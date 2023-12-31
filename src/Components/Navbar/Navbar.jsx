import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <span className="material-icons-outlined">menu</span>
          </IconButton>
          <Typography variant="h6" className="title">
            Daniel
          </Typography>
          <div className="navbar-collapse">
            <List className="navbar-nav">
              <ListItem className="nav-item" onClick={handleDrawerClose}>
                <Link className="nav-link" to="/Inicio">
                  Inicio
                </Link>
              </ListItem>
              <ListItem className="nav-item" onClick={handleDrawerClose}>
                <a className="nav-link" href="#">
                  Historia
                </a>
              </ListItem>
              <ListItem className="nav-item" onClick={handleDrawerClose}>
                <a className="nav-link" href="#">
                  Empleados
                </a>
              </ListItem>
              <ListItem className="nav-item" onClick={handleDrawerClose}>
                <a className="nav-link" href="#">
                  Agenda
                </a>
              </ListItem>
              <ListItem className="nav-item" onClick={handleDrawerClose}>
                <Link className="nav-link" to="/Servicios">
                  Servicios
                </Link>
              </ListItem>
              <ListItem className="nav-item" onClick={handleDrawerClose}>
                <a className="nav-link" href="#">
                  Tienda
                </a>
              </ListItem>
            </List>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List className="drawerList">
          <ListItem onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;
