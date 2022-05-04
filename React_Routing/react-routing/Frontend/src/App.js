import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AboutUS from './components/AboutUS';
import Contact from './components/Contact';
import Categories from './components/Categories';
import ContextAPI from './components/ContextAPI/ContextAPI';
import Kids from './components/Kids';
import Mother from './components/Mother';
import Product from './components/Product';
import SignUp from './components/SignUp';
import NewComponent from './components/HigherOrderFunction/CenteredHOC';
import StopWatch from './components/StopWatch';
import Formik_Yup from './components/Formik_Yup';
import Wrapper from './components/HOC_Classbased/Wrapper';
import Components_ABCD from './components/Components_ABCD';
import Practice from './components/Practice'
import ParentComponent from './components/RenderProps/ParentComponent';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUS/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hoc" element={<NewComponent/>} />
        <Route path="/wrapper" element={<Wrapper/>} />
        <Route path="/stopwatch" element={<StopWatch/>} />
        <Route path="/formik" element={<Formik_Yup/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/parentcomponent" element={<ParentComponent/>} />
        <Route path="/componentabcd" element={<Components_ABCD/>} />
        <Route path="/contextAPI" element={<ContextAPI/>} />
        <Route path="/categories" element={<Categories/>}>
          {/* <Route index element={<Kids/>}/> */}
          <Route path='kids' element={<Kids/>}/>
          <Route path='mother' element={<Mother/>}/>
        </Route>
        <Route path="/practice" element={<Practice name={() => "Madan"} />}/>
      </Routes>
    </>
  );
}

export default App;
