import './App.css';
import useDrawer from "./useDrawer";
import Drawer from './Drawer';


function App() {
  const { openDrawer } = useDrawer();

  const handleOpenDrawer1 = () => {
    openDrawer('Page 1', <Temp/>, 'Footer 1');
  };

  const handleOpenDrawer2 = () => {
    openDrawer('Page 2', 'Page 2 content', 'Footer 2');
  };

  const handleOpenDrawer3 = () => {
    openDrawer('Page 3', <div>Page 3 content</div>);
  };

  return (
    <div className="App" style={contentStyle}>
      <button onClick={handleOpenDrawer1}>Open Page 1</button>
      <button onClick={handleOpenDrawer2}>Open Page 2</button>
      <button onClick={handleOpenDrawer3}>Open Page 3</button>
      <Drawer />
    </div>
  );
}

const Temp = () => {
  return (
      <div>Page 1 content</div>
  );
};


const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  gap: '20px',
  padding: '20px'
}

export default App;
