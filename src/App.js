import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Profile from './components/accounts/Profile';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </>
)
export default App;
