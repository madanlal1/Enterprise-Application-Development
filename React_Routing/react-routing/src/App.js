import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AboutUS from './components/AboutUS';
import Contact from './components/Contact';
import Categories from './components/Categories';
import Kids from './components/Kids';
import Mother from './components/Mother';
import Product from './components/Product';
import SignUp from './components/SignUp';
import NewComponent from './components/HigherOrderFunction/CenteredHOC';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUS/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hoc" element={<NewComponent/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/categories" element={<Categories/>}>
          {/* <Route index element={<Kids/>}/> */}
          <Route path='kids' element={<Kids/>}/>
          <Route path='mother' element={<Mother/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
