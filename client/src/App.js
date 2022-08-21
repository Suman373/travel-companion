import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import {BrowserRouter as Brouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Brouter>
    <Routes>
     <Route exact path="/" element={
          <>
            <HomePage/>
          </>
     }></Route>
     <Route path="/register"element={
        <RegisterForm/>
       }>
     </Route>
     <Route path="/login" element={
          <LoginForm/>
     }>
     </Route>
     <Route path="/user" element={
        <UserPage/>
     }></Route>
    </Routes>
    </Brouter>
     </div>
  );
}

export default App;
