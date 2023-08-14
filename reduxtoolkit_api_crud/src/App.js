
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import EditUser from './Pages/EditUser';

function App() {
  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/edit/:id' element={<EditUser/>} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
