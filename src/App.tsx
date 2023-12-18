import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Layout from './layout/Layout';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { ProtectedRoute } from './context/ProtectedRoute';
import UsersListPage from './pages/UsersListPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/users" element={
              <UserProvider>
                <ProtectedRoute>
                  <UsersListPage/>
                </ProtectedRoute>
              </UserProvider>
            }/>
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
