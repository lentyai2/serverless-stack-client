import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { Link, useHistory, Router } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./libs/errorLib";

function App() {
  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    !isAuthenticating &&
    <div className="App container">  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Dev Portal Prototype</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {isAuthenticated
            ? <>
                <Link to="/settings">
                  <NavItem>Settings</NavItem>
                </Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            : 
          <Nav className="mr-auto">
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          }
          {/* {isAuthenticated
            ? <Link onClick={handleLogout}>Logout</Link>
            : <Nav>
                <Nav.Link to="/signup">Signup</Nav.Link>
                <Nav.Link to="/login">Login</Nav.Link>
              </Nav>
          } */}

            {/* <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}

        </Navbar.Collapse>
      </Navbar>   
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider> 
  </div>
);
    
    
}

export default App;
