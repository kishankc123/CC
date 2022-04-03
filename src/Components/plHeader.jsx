import React from 'react';
import { 
    Nav, 
    Navbarcontainer, 
    NavMenu,
    NavItem,
    NavLinks,
    } from './SHeader'; 

const Header = () => {
  return (
    <div>
         <Nav>
          <Navbarcontainer>
                                      
              <NavMenu>

                  <NavItem>
                      <NavLinks to = "addblog">  Add  Blog </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "/login"> Log out </NavLinks>
                  </NavItem>                  
              </NavMenu>

            </Navbarcontainer>
        </Nav>
    </div>
  );
}

export default Header;