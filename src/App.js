import logo from './logo.svg';
import './App.css';
import Profil from './component/Profil';

function App() {
  const age="age : 19";
  const fullname="fullname : mohamed harzali"
  const object={color:"white",backgroundColor:"purple"}
  const alertme=()=>{
    alert(fullname)
  }
  return (
    <div className="App">
      <Profil age={age} fullname={fullname} style={object}  alert={alertme} />
    
    </div>
  );
}

export default App;
