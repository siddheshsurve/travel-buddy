import { Routes, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';

function App() {
  return (

    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
      
  );
}

export default App;
