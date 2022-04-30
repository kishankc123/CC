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

    if(value.login==true)
    {
        return (
            <div class="container-fluid">
                 <Nav>
                  <Navbarcontainer>
                                              
                      <NavMenu>
        
                          <NavItem>
                              <NavLinks to = "blog">  Your Blogs </NavLinks>
                          </NavItem>

                          <NavItem>
                              <NavLinks to = "addblog">  Add a new One </NavLinks>
                          </NavItem>
        
                          <NavItem>
                              <NavLinks to = "/logout"> Log Out </NavLinks>
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