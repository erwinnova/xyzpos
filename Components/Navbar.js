import React, {useState} from 'react';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
        <Navbar color='light' light expand="md" >
          <NavbarBrand href='/'><img src="logobq.png" alt="logo" width="20" height="20" className="d-inline-block"/>xyzPOS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavigationBar;