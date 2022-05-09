
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Notfound from './Components/Notfound/Notfound';
import Signup from './Components/Signup/Signup';
import Manage from './Components/Manage/Manage';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import MyItems from './Components/MyItems/MyItems';

function App() {
  return (
    <div >
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/manage" element={<Manage></Manage>} />
        <Route path="/myItems" element={<MyItems></MyItems>} />
        <Route path="/blog" element={<Blog></Blog>} />
        
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
