import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Request from './components/Request';
import Report from './components/Report';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>  
      <Route index  element={<Home/>}/>
      <Route path='request' element={<Request/>}/>
      <Route path='report' element={<Report/>}/>
      
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
