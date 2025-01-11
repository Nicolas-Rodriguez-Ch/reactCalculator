import { Route, Routes } from 'react-router';
import './App.css';
import Calculator from './pages/Calculator/Calculator';
import { paths } from './static/paths';
import CalculationsHistory from './pages/CalculationHistory/CalculationsHistory';
import HeaderComponent from './components/Header/HeaderComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path={paths.home} element={<Calculator />} />
        <Route path={paths.history} element={<CalculationsHistory />} />
      </Routes>
    </>
  );
}

export default App;
