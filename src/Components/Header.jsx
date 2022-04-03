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
                      <NavLinks to = "addblog">  Add your Blog </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "/login"> Log In </NavLinks>
                  </NavItem>                  
              </NavMenu>

            </Navbarcontainer>
        </Nav>
    </div>
  );
}

export default Header;