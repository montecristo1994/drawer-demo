import './App.css';
import Content1 from './Content1';
import Drawer from './Drawer';
import { useState } from 'react';
import Header1 from './Header1';
import Footer1 from './Footer1';
import Content2 from './Content2';

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDrawer1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };

  const toggleDrawer2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  };

  return (
    <div className="App" style={contentStyle}>
      <button onClick={toggleDrawer1}>Toggle Drawer with header, footer</button>
      <button onClick={toggleDrawer2}>Toggle Drawer without header, footer</button>
      <Drawer isOpen={isOpen1} onToggleDrawer={toggleDrawer1} drawerContent={Content1} header={Header1} footer={Footer1}></Drawer>
      <Drawer isOpen={isOpen2} onToggleDrawer={toggleDrawer2} drawerContent={Content2}></Drawer>
    </div>
  );
}


const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  gap: '20px',
  padding: '20px'
}

export default App;
