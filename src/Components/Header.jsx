import React , {useContext}from 'react';
import { 
    Nav, 
    Navbarcontainer, 
    NavMenu,
    NavItem,
    NavLinks,
    } from './SHeader'; 
import AuthContext from './AuthContext';
const Header = () => {

    const value = useContext(AuthContext)

    console.log(value.login);

    if(value.login=="false")
    {
        return (
            <div>
                 <Nav>
                  <Navbarcontainer>
                                              
                      <NavMenu>
        
                          <NavItem>
                              <NavLinks to = "addblog">  Your Blogs </NavLinks>
                          </NavItem>
        
                          <NavItem>
                              <NavLinks to = "/login"> Log Out </NavLinks>
                          </NavItem>                                        
                      </NavMenu>
        
                    </Navbarcontainer>
                </Nav>
            </div>
          );
    }

    else
    {
        return (
            <div>
                 <Nav>
                  <Navbarcontainer>
                                              
                      <NavMenu>
        
                          <NavItem>
                              <NavLinks to = "addblog">  Add a blog </NavLinks>
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
  
}

export default Header;