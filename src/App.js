import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Yatras from './components/Yatras';
import Orders from './components/Orders';
import Shoes from './components/Shoes';
import Tech from './components/Tech';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Container className="py-3">
      <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/home' element={<Home />} />
          <Route path='/yatras' element={<Yatras />} />
          <Route path='/orders' element={<PrivateRoute><Orders /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
      </AuthProvider>
    </Container>
  );
}

export default App;
