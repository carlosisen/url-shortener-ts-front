import { useGlobalContext } from './context/appContext';
import { IGlobalContext } from './types';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ProtectedRoute from './utils/ProtectedRoute';
import UrlForm from './components/UrlForm';
import UrlGallery from './components/UrlGallery';
import './assets/App.css';



function App() {
  const {appState:{user}} = useGlobalContext() as IGlobalContext
  
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}>
            <Route path="urlCreation" element={<UrlForm/>}/>
            <Route path="allurl" element={<UrlGallery/>}/>
        </Route>
        <Route path="*" element={<h1>Esta ruta no existe</h1>} />
      

        
      </Routes>

    </div>
  );
}

export default App;
