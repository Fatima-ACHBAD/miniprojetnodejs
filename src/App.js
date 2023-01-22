import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ClientList from './components/ClientList';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import AddClientForm from './components/AddClientForm';
import EditClientForm from './components/EditClientForm';
//import Home from './components/Home';

function App() {
  let nom="FATIMA"
  let p={"ville":"  De casablanca","lieu":"  Maarif"}
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="container mt-4">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Clients' element={<ClientList/>}/>
        <Route path='/Clients/Add' element={<AddClientForm/>}/>
        <Route path='/Clients/edit/:idc' element={<EditClientForm/>}/>
      </Routes>
      
      </div>
   
    </div>
  );
}

export default App;
// <Home  name={nom} lastname="Achbad" person={p}/>
//<ClientList/>