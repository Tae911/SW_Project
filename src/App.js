import { Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;