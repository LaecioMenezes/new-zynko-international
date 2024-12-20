import { Routes, Route } from 'react-router-dom';
import PortugueseLanding from './pages/PortugueseLanding';
import EnglishLanding from './pages/EnglishLanding';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortugueseLanding />} />
      <Route path="/en" element={<EnglishLanding />} />
    </Routes>
  );
}

export default App;