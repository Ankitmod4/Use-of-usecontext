import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ChildB from './ChildB';
import Navbar from './Navbar';
import { createContext } from 'react';

let data = createContext();

function App() {
  let name="Ankit"

  return (  
    <> 
      <BrowserRouter>
        {/* <ChildB /> */}
        <data.Provider value={name}>
        <Routes>
          
          {/* <Route path='/navbar' element={<Navbar />}/> */}
      <Route path='/childA' element={<ChildA />}/>
          <Route path='/' element={<ChildB />} />
        </Routes> 
        </data.Provider>

    </BrowserRouter>
    </>
  ); 
}
export { data }
export default App;


