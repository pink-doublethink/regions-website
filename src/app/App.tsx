import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countries from '../pages/Countries';
import Country from '../pages/Country';
import Header from '../components/Header';
import './styles.css';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/:name" element={<Country />} />
        <Route path="/" element={<Countries />} />
      </Routes>
    </Router>
  );
};

export default App;
