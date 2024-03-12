import React from 'react';
import './App.css';

const Drawer = ({ isOpen, onToggleDrawer, drawerContent: DrawerContent, header: HeaderComponent, footer: FooterComponent }) => {
  return (
    <div>
      {isOpen && (
        <div style={drawerStyle}>
          <button onClick={onToggleDrawer} style={buttonStyle}>Close</button>
          {HeaderComponent && <div style={headerStyle}> <HeaderComponent /> </div>}
          <DrawerContent />
          {FooterComponent && <div style={footerStyle}> <FooterComponent /> </div>}
          
        </div>
      )}
            
    </div>
  );
};

const drawerStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '80%',
  height: '100%',
  backgroundColor: 'white',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  padding: '20px',
};

const headerStyle = {
    borderBottom: '1px solid black',
    padding: '20px',
    marginBottom: '20px'
}

const footerStyle = {
    borderTop: '1px solid black',
    padding: '20px',
    marginTop: '20px'
}

const buttonStyle = {
    position: 'absolute',
    top: '40px',
    right: '10px'
}

export default Drawer;
