
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { RestaurantPage } from './Pages/RestaurantPage/RestaurantPage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/:restaurant' element={<RestaurantPage/>} />

      </Routes>

    </div>
  );
}

export default App;
