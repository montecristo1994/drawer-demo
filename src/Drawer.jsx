import React from 'react';
import './App.css';
import useDrawer from './useDrawer';
import { useContext, useEffect, useState } from 'react';
import { DrawerContext } from './Drawer-prodiver';

const Drawer = () => {
  const { closeDrawer } = useDrawer();
  const {
		config: {
			isOpen,
			content,
			title,
      footer
		}
	} = useContext(DrawerContext);

  const [innerOpen, setInnerOpen] = useState(isOpen)
	useEffect(() => {
		if (isOpen) {
			setInnerOpen(true);
    }
	}, [isOpen])

  return (
    <div>
      {isOpen && (
        <div style={drawerStyle}>
          <button onClick={closeDrawer} style={buttonStyle}>Close</button>
          {title}
          <div className="divider"></div>
          {innerOpen && content}      
          <div className="divider"></div>    
          {footer}
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

const buttonStyle = {
    position: 'absolute',
    top: '20px',
    right: '10px'
}

export default Drawer;
