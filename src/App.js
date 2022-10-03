import './App.css';
import Icon from './Icon';
import NavBar from './NavBar'

function App() {

  const Productos =  "Productos";

  return (
    <div className="App">
      <NavBar Productos={Productos} >

          <Icon></Icon>
      </NavBar>
    
  
    </div>
  );
}

export default App;
