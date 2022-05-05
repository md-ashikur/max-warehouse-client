
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Notfound from './Components/Notfound/Notfound';
import Signup from './Components/Signup/Signup';
import Manage from './Components/Manage/Manage';

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/manage" element={<Manage></Manage>} />
        
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
    </div>
  );
}

export default App;
